import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { IFormItemError } from './interface'
import './style/FormItemError.scss'


export default class FormItemLabel extends Taro.PureComponent<IFormItemError> {


  static defaultProps = {
    data: [],
  }

  render() {
    const { data } = this.props
    return (
      <View className="error-message">
        {data.map(error => {
          return (
            <View key={error}>{error}</View>
          )})}
      </View>
    )
  }
} 