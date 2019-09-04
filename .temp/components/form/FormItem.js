import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import cls from 'classnames';
import Control from "../field/index";
import FormItemLabel from './FormItemLabel';
import FormItemWrapper from './FormItemWrapper';
import './style/FormItem.scss';
const clsPrefix = 'cp-form-item';
export default class FormItem extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {};
    this.onChange = (value, event) => {
      const { field, onChange } = this.props;
      const { fieldCode } = field;
      let fieldValue = value;
      if (value && value.target && typeof value.target === 'object') {
        fieldValue = value.target.value;
      }
      onChange(fieldCode, fieldValue);
    };
    this.onClear = () => {
      const { field, onChange } = this.props;
      const { fieldCode } = field;
      onChange(fieldCode, null);
    };
  }
  render() {
    const { field, value, errors, hideRequiredMark, colon, layout, border } = this.props;
    const { fieldCode, label, rules, child, isAlwaysVertical, isFullRow, clear, help } = field;
    if (!child) return null;
    const isHorizontal = layout === 'horizontal' && !isAlwaysVertical;
    return <FormItemWrapper clear={clear} value={value} errors={errors} border={border} onClear={this.onClear} isFullRow={isFullRow}>
        <View className={cls(clsPrefix, {
        [`${clsPrefix}-horizontal`]: isHorizontal,
        [`${clsPrefix}-error`]: errors.length
      })}>
          <FormItemLabel help={help} rules={rules} colon={colon} isHorizontal={isHorizontal} hideRequiredMark={hideRequiredMark}>
            {label}
          </FormItemLabel>
          <View className={`${clsPrefix}-control`}>
            <Control name={fieldCode} value={value} label={label} child={child} onChange={this.onChange} />
          </View>
        </View>
      </FormItemWrapper>;
  }
}
FormItem.defaultProps = {
  field: {},
  errors: []
};
FormItem.options = {
  styleIsolation: 'shared'
};