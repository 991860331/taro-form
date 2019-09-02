import Taro from '@tarojs/taro'
import { Map, View, Text } from '@tarojs/components'
import { AtInput, AtTextarea, AtToast, AtRadio } from 'taro-ui'
import I18NCode from '../I18NCode'
import './index.scss'

const clsPrefix = 'i18n-number'

interface II18NNumber {
  value: string;
  [otherProps: string]: any;
}
export default class I18NNumber extends Taro.PureComponent<II18NNumber> {

  static defaultProps = {
    
  }

  

  render() {
    return (
      <View className={clsPrefix}>
        <I18NCode />
        <AtInput border={false} />
      </View>
    )
  }
}

