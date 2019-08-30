import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import cls from 'classnames';
import { AtActionSheet } from "taro-ui";
import './style/FormItemLabel.scss';
const clsPrefix = 'cp-form-item-label';
export default class FormItemLabel extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
    this.handleViewHelp = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
  }
  render() {
    const { visible } = this.state;
    const { children, rules, colon, hideRequiredMark, isHorizontal, help } = this.props;
    const isRequired = rules.find(rule => rule.required) && !hideRequiredMark;
    return <View>
        <View className={cls(clsPrefix, {
        [`${clsPrefix}-vertical`]: !isHorizontal
      })}>
          <Text onClick={this.handleViewHelp} className={cls("position-relative", {
          [`${clsPrefix}-help`]: help
        })}>
            {isRequired && <Text className={`${clsPrefix}-required-star`}>*</Text>}
            {children}
          </Text>
          {colon && <Text className={`${clsPrefix}-colon`}>:</Text>}
        </View>
        <AtActionSheet onClose={this.onClose} isOpened={visible}>
          <View className={`${clsPrefix}-help-view`}>{help}</View>
        </AtActionSheet>
      </View>;
  }
}
FormItemLabel.defaultProps = {
  rules: []
};