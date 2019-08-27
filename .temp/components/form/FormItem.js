import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import cls from 'classnames';
import { AtToast } from "taro-ui";
import FormItemLabel from './FormItemLabel';
import Control from "../field/index";
import './style/FormItem.scss';
export default class FormItem extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false
    };
    this.onChange = (value, event) => {
      const { field, onChange } = this.props;
      const { fieldCode } = field;
      let fieldValue = value;
      if (value && value.target && typeof value.target === 'object') {
        fieldValue = value.target.value;
      }
      onChange(fieldCode, fieldValue);
    };
    this.onErrorClick = e => {
      if (e) {
        e.preventDefault();
      }
      this.setState({
        isOpened: true
      });
    };
    this.onToastClose = () => {
      this.setState({
        isOpened: false
      });
    };
  }
  render() {
    const { isOpened } = this.state;
    const { field, value, error, hideRequiredMark, colon, layout } = this.props;
    const { fieldCode, label, rules, child } = field;
    if (!child) return null;
    const { type } = child;
    const isError = error.length > 0;
    const isHorizontal = layout === 'horizontal';
    const showErrors = error.join("\n");
    return <View className={cls("form-item", {
      horizontal: isHorizontal
    })}>
        <FormItemLabel colon={colon} rules={rules} layout={layout} isError={isError} fieldType={type} hideRequiredMark={hideRequiredMark}>
          {label}
        </FormItemLabel>
        <View className="item-component">
          <Control name={fieldCode} value={value} label={label} child={child} isError={isError} onChange={this.onChange} onErrorClick={this.onErrorClick} />
          {isError && <View>
              <AtToast duration={3000} isOpened={isOpened} text={showErrors} onClose={this.onToastClose} />
            </View>}
        </View>
      </View>;
  }
}
FormItem.defaultProps = {
  field: {},
  error: []
};