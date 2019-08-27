import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtIcon } from "taro-ui";
import './index.scss';
export default class ItemWrapper extends Taro.PureComponent {
  render() {
    const { children, contentText, placeholder, renderIcon, onClick, error } = this.props;
    return <View className="item-wrapper at-input" onClick={onClick}>
        {contentText && <Text className="flex1 text">{contentText}</Text>}
        {!contentText && <Text className="flex1 placeholder">{placeholder}</Text>}
        {error && <View className="icon-wrapper">
            <AtIcon value="clock" size="16" color="#F00"></AtIcon>
          </View>}
        {!error && <View className="icon-wrapper">{renderIcon}</View>}
        {children}
      </View>;
  }
}
ItemWrapper.options = {
  styleIsolation: 'shared'
};
ItemWrapper.defaultProps = {
  onClick: () => {}
};