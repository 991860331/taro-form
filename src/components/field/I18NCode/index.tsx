import Taro from '@tarojs/taro'
import { Map, View, Text } from '@tarojs/components'
import { AtFloatLayout, AtRadio, AtIcon, AtActionSheet, AtActionSheetItem } from "taro-ui"
import countryList from './countryList'
import './index.scss'

const clsPrefix = 'i18n-code'

const defaultCode = {
  code: 'cn',
  dialCode: '86',
}

const countrys = Object.keys(countryList).map(key => {
  const { code, name, dialCode } = countryList[key]
  return {
    label: `${name} +${dialCode}`,
    value: `${code}-${dialCode}`,
  }
})

interface II18NCode {
  value: Object;
  [otherProps: string]: any;
}
export default class I18NCode extends Taro.Component<II18NCode> {

  static defaultProps = {
    
  }

  state = {
    visible: false,
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  handleVisible = () => {
    this.setState({
      visible: true,
    })
  }

  onSelect = selectedValue => {
    const { onChange, value } = this.props
    const [ code, dialCode ] = selectedValue.split("-")
    onChange({
      ...value,
      code,
      dialCode,
    })
    this.onClose()
  }

  render() {
    const { visible } = this.state
    const { value } = this.props
    const { code, dialCode } = value || defaultCode
    return (
      <View className={clsPrefix}>
        <View onClick={this.handleVisible}>
          <Text className={`${clsPrefix}-value`}>+{dialCode}</Text>
          <AtIcon value='chevron-down' size='16' color='#606266' />
        </View>
        <AtFloatLayout isOpened={visible} title="请选择国家" onClose={this.onClose}>
          <AtRadio
            value={`${code}-${dialCode}`}
            options={countrys}
            onClick={this.onSelect}
          />
        </AtFloatLayout>
      </View>
    )
  }
}

