import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { AtSwitch } from 'taro-ui'
import ErrorWrapper from '../ErrorWrapper'

export default (props) => {
  const { error, onErrorClick, ...otherProps } = props
  return (
    <ErrorWrapper error={error} onErrorClick={onErrorClick}>
      <AtSwitch {...otherProps} />
    </ErrorWrapper>
  )
}