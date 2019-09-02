import Taro from '@tarojs/taro'
import { Map, View, Text } from '@tarojs/components'
import './index.scss'

const clsPrefix = 'i18n-code'

interface II18NCode {
  value: string;
  [otherProps: string]: any;
}
export default class I18NCode extends Taro.PureComponent<II18NCode> {

  static defaultProps = {
    
  }

  

  render() {
    return (
      <View className={clsPrefix}>code</View>
    )
  }
}

