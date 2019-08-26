import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import cls from 'classnames';
import './style/FormItemLabel.scss';
const topPlacement = ['TEXTAREA'];
export default class FormItemLabel extends Taro.PureComponent {
  render() {
    const { children, rules, isError, fieldType, colon, hideRequiredMark, layout } = this.props;
    const isRequired = rules.find(rule => rule.required);
    const isTop = topPlacement.includes(fieldType);
    const isVertical = layout === 'vertical';
    return <View className={cls("item-label", {
      error: isError,
      vertical: isVertical,
      topPlacement: isTop
    })}>
        {isRequired && !hideRequiredMark && <Text className="required-star">*</Text>}
        <Text>{children}</Text>
        {colon && <Text className="colon">:</Text>}
      </View>;
  }
}
FormItemLabel.defaultProps = {
  rules: [],
  isError: false
};