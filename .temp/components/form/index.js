import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import FormItem from './FormItem';
import Context from './Context';
import './style/index.scss';
class CpForm extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    this.setInitialValues();
  }
  setInitialValues() {
    const { initialValues } = this.props;
    this.setFieldsValue(initialValues);
  }
  render() {
    const { fields, layout, colon, hideRequiredMark } = this.props;
    const { data } = this.state;
    return <Context.Provider value={{
      colon,
      layout,
      hideRequiredMark
    }}>
				<View className="cp-form">
					{fields.map(field => {
          if (!field) return null;
          const { fieldCode } = field;
          const value = data[fieldCode];
          return <FormItem key={fieldCode} field={field} onChange={this.onChange} value={value} />;
        })}
				</View>
			</Context.Provider>;
  }
  onChange = (fieldName, value) => {
    const { data } = this.state;
    const { onFieldsChange } = this.props;
    console.log("onChange:", fieldName, ":", value);
    this.setState({
      data: {
        ...data,
        [fieldName]: value
      }
    }, () => {
      if (typeof onFieldsChange === 'function') {
        const { data } = this.state;
        onFieldsChange(fieldName, data);
      }
    });
  };
  resetFields = fields => {
    if (Array.isArray(fields)) {
      const { data } = this.state;
      fields.forEach(field => {
        delete data[field];
      });
      this.setState({
        data: {
          ...data
        }
      });
      return;
    }
    this.setState({
      data: {}
    });
  };
  setFieldsValue = (fieldsValue, callback) => {
    if (!fieldsValue || typeof fieldsValue !== 'object') return;
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        ...fieldsValue
      }
    }, () => {
      if (typeof callback === 'function') {
        callback();
      }
    });
  };
  getFieldValue = fieldName => {
    const { data } = this.state;
    return data[fieldName];
  };
  getFieldsValue = fieldNames => {
    if (Array.isArray(fieldNames)) {
      const fieldsValue = {};
      const { data } = this.state;
      fieldNames.forEach(fieldName => {
        if (typeof fieldName === 'string') {
          fieldsValue[fieldName] = data[fieldName];
        }
      });
      return fieldsValue;
    }
  };
  submit = () => {
    const { data } = this.state;
    return data;
  };
}
CpForm.defaultProps = {
  colon: true,
  layout: 'horizontal',
  fields: [],
  hideRequiredMark: false
};
export default CpForm;