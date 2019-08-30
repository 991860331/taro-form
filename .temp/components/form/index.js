import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import FormItem from './FormItem';
import validator from './validate';
import './style/index.scss';
const clsPrefix = 'cp-form';
export default class Index extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      fieldValues: {},
      fieldErrors: {}
    };
    this.setFieldsValue = (fieldsValue, callback) => {
      if (!fieldsValue || typeof fieldsValue !== 'object') return;
      const { fieldValues } = this.state;
      this.setState({
        fieldValues: {
          ...fieldValues,
          ...fieldsValue
        }
      }, () => {
        if (typeof callback === 'function') {
          callback();
        }
      });
    };
    this.onChange = (fieldName, value) => {
      const { fieldValues, fieldErrors } = this.state;
      const { onFieldsChange } = this.props;
      this.validateField(fieldName, value).then(error => {
        this.setState({
          fieldErrors: {
            ...fieldErrors,
            [fieldName]: error
          }
        });
      });
      this.setState({
        fieldValues: {
          ...fieldValues,
          [fieldName]: value
        }
      }, () => {
        if (typeof onFieldsChange === 'function') {
          const { fieldValues } = this.state;
          onFieldsChange(fieldName, fieldValues);
        }
      });
    };
    this.resetFields = fieldNames => {
      if (Array.isArray(fieldNames)) {
        const { fieldValues } = this.state;
        fieldNames.forEach(field => {
          delete fieldValues[field];
        });
        this.setState({
          fieldValues: {
            ...fieldValues
          }
        });
        return;
      }
      this.setState({
        fieldValues: {}
      });
    };
    this.getFieldValue = fieldName => {
      const { fieldValues } = this.state;
      return fieldValues[fieldName];
    };
    this.getFieldsValue = fieldNames => {
      const fieldsValue = {};
      if (Array.isArray(fieldNames)) {
        const { fieldValues } = this.state;
        fieldNames.forEach(fieldName => {
          if (typeof fieldName !== 'string') return;
          fieldsValue[fieldName] = fieldValues[fieldName];
        });
      }
      return fieldsValue;
    };
    this.submit = async () => {
      const { fieldValues } = this.state;
      const fieldErrors = await this.validateFields();
      const hasError = Object.keys(fieldErrors).find(fieldName => {
        const filedError = fieldErrors[fieldName];
        return filedError && filedError.length;
      });
      return new Promise((resolve, reject) => {
        if (hasError) {
          reject(fieldErrors);
        } else {
          resolve(fieldValues);
        }
      });
    };
    this.validateFields = async fieldNames => {
      const fieldErrors = {};
      const { fields } = this.props;
      const { fieldValues } = this.state;
      const validateFields = Array.isArray(fieldNames) ? fieldNames : fields.map(field => field.fieldCode);
      for (const fieldCode of validateFields) {
        const fieldValue = fieldValues[fieldCode];
        const errors = await this.validateField(fieldCode, fieldValue);
        fieldErrors[fieldCode] = errors;
      }
      this.setState({
        fieldErrors
      });
      return fieldErrors;
    };
  }
  componentDidMount() {
    this.setInitialValues();
  }
  setInitialValues() {
    const { initialValues } = this.props;
    this.setFieldsValue(initialValues);
  }
  validateField(fieldName, fieldValue) {
    if (typeof fieldName !== 'string') return Promise.resolve();
    const { fields } = this.props;
    const field = fields.find(item => item.fieldCode === fieldName);
    if (!field) return Promise.resolve();
    const { rules, child: { type } } = field;
    return validator(fieldName, rules, fieldValue, type).then(errors => {
      return errors;
    });
  }
  render() {
    const { fields, layout, colon, hideRequiredMark, border } = this.props;
    const { fieldValues, fieldErrors } = this.state;
    return <View className={clsPrefix}>
				{fields.map(field => {
        if (!field) return null;
        const { fieldCode } = field;
        const value = fieldValues[fieldCode];
        const errors = fieldErrors[fieldCode];
        return <FormItem key={fieldCode} colon={colon} field={field} value={value} errors={errors} layout={layout} border={border} onChange={this.onChange} hideRequiredMark={hideRequiredMark} />;
      })}
			</View>;
  }
}
Index.defaultProps = {
  colon: true,
  layout: 'horizontal',
  fields: [],
  border: true,
  hideRequiredMark: false
};