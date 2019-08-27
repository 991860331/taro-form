import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { AtSwitch } from 'taro-ui'
import ErrorWrapper from '../ErrorWrapper'
import './index.scss'

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
    <ErrorWrapper error={error} onErrorClick={onErrorClick}>
      <View className="boolean-wrapper">
        <Text className="selected-text">{selectedText}</Text>
        <AtSwitch 
          {...otherProps} 
          checked={value}
        />
      </View>
    </ErrorWrapper>
  )
}