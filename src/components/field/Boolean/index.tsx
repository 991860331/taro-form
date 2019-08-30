import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { AtSwitch } from 'taro-ui'
import './index.scss'

const clsPrefix = 'boolean-wrapper'

export default (props) => {
  const { error, onErrorClick, options, value=false, ...otherProps } = props
  if (
    !Array.isArray(options) || 
    options.length !== 2 ||
    !options.find(option => option.value === true) ||
    !options.find(option => option.value === false)
  ) {
    return null
  }
  const selectedOption = options.find(option => option.value === value)
  const selectedText = selectedOption ? selectedOption.title: ""
  return (
    <View className={clsPrefix}>
      <AtSwitch 
        {...otherProps} 
        border={false}
        checked={value}
        title={selectedText}
      />
    </View>
  )
}