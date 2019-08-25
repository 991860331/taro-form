import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import Context from './Context';
import './style/FormItemLabel.scss';
export default class FormItemLabel extends Taro.PureComponent {
  render() {
    const { colon, hideRequiredMark } = this.context;
    const { children, rules } = this.props;
    const isRequired = rules.find(rule => rule.required);
    return <View>
        {isRequired && !hideRequiredMark && <Text className="required-star">*</Text>}
        {children}
        {colon && <Text className="colon">:</Text>}
      </View>;
  }
}
FormItemLabel.contextType = Context;
FormItemLabel.defaultProps = {
  rules: []
};