import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from "taro-ui"
import './index.scss'


interface IFieldDecorator {
  onClick?: Function;
  content?: string;
  placeholder?: string;
}

const clsPrefix = 'field-decorator'

export default class FieldDecorator extends Taro.PureComponent<IFieldDecorator> {

  static options = {
    styleIsolation: 'shared'
  }  

  static defaultProps ={
    onClick: () => {},
  }

  render() {
    const { children, content, placeholder, onClick } = this.props
    return (
      <View className={clsPrefix}>
        <View className="flex1" onClick={onClick}>
          {content&&(
            <Text>{content}</Text>
          )}
          {!content&&(
            <Text className={`${clsPrefix}-placeholder`}>{placeholder}</Text>
          )}
        </View>
        {children}
      </View>
    )
  }
}