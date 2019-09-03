import Taro from '@tarojs/taro'
import { Map, View, Text } from '@tarojs/components'
import { AtInput, AtTextarea, AtToast, AtRadio } from 'taro-ui'
import I18NCode from '../I18NCode'
import './index.scss'

const clsPrefix = 'i18n-number'

interface II18NNumber {
  value: Object;
  [otherProps: string]: any;
}
export default class I18NNumber extends Taro.PureComponent<II18NNumber> {

  static defaultProps = {
    
  }

  state = {
    code: "",
  }
  
  onChange = number => {
    const { onChange, value } = this.props
    onChange({
      ...value,
      number,
    })
  }

  render() {
    const { value, onChange, name } = this.props
    const { number } = value || {}
    return (
      <View className={clsPrefix}>
        <I18NCode value={value} onChange={onChange} />
        <AtInput 
          type="number"
          name={name} 
          border={false} 
          onChange={this.onChange} 
          value={number} 
        />
      </View>
    )
  }
}

