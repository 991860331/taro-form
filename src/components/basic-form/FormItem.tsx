import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { IFormItem } from './interface'
import Context from './Context'

export default class FormItem extends Taro.PureComponent<IFormItem> {

  static contextType = Context

  state = {

  }

  render() {
    const { children, label } = this.props
    console.log(this.context, 'context')
    return (
      <View>
        <Text>{label}:</Text>
        {children}
      </View>
    )
  }
}