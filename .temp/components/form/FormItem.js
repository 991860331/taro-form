import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import FormItemLabel from './FormItemLabel';
import Context from './Context';
import Control from "../field/index";
import './style/FormItem.scss';
export default class FormItem extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.onChange = (value, event) => {
      const { field, onChange } = this.props;
      const { fieldCode } = field;
      if (value.target && typeof value.target === 'object') {
        onChange(fieldCode, value.target.value);
      } else {
        onChange(fieldCode, value);
      }
    };
  }
  render() {
    const { field, value } = this.props;
    const { fieldCode, label, rules, child } = field;
    return <View className="form-item">
        <FormItemLabel rules={rules}>{label}</FormItemLabel>
        <View className="item-component">
          <Control value={value} name={fieldCode} onChange={this.onChange} child={child} />
        </View>
        <View className="error-message">这里是报错信息</View>
      </View>;
  }
}
FormItem.contextType = Context;
FormItem.defaultProps = {
  field: {}
};