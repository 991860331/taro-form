import Taro from '@tarojs/taro'
import { AtTextarea } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import ErrorWrapper from '../ErrorWrapper'
import './index.scss'

export default (props) => {
  const { onErrorClick, error, ...otherProps } = props
  return (
    <View className="textarea-wrapper">
      <ErrorWrapper error={error} onErrorClick={onErrorClick}>
        <AtTextarea {...otherProps} />
      </ErrorWrapper>
    </View>
  )
}