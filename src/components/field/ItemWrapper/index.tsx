import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from "taro-ui"
import './index.scss'


interface IItemWrapper {
  contentText?: string;
  placeholder?: string;
  onClick?: Function;
  renderIcon?: Element;
  error?: boolean;
  onErrorClick?: Function;
}
export default class ItemWrapper extends Taro.PureComponent<IItemWrapper> {

  static options = {
    styleIsolation: 'shared'
  }  

  static defaultProps ={
    onClick: () => {},
    onErrorClick: () => {},
  }

  render() {
    const { children, contentText, placeholder, renderIcon, onClick, error, onErrorClick } = this.props
    return (
      <View className="item-wrapper">
        <View className="flex1" onClick={onClick}>
          {contentText&&(
            <Text className="text">{contentText}</Text>
          )}
          {!contentText&&(
            <Text className="placeholder">{placeholder}</Text>
          )}
        </View>
        {error&&(
          <View className="icon-wrapper" onClick={onErrorClick}>
            <AtIcon value='clock' size='16' color='#F00'></AtIcon>
          </View>
        )}
        {!error&&(
          <View className="icon-wrapper">{renderIcon}</View>
        )}
        {children}
      </View>
    )
  }
}