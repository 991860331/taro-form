import Taro from '@tarojs/taro'
import { AtTextarea } from 'taro-ui'
import ErrorWrapper from '../ErrorWrapper'

export default (props) => {
  const { onErrorClick, error, ...otherProps } = props
  return (
    <ErrorWrapper error={error} onErrorClick={onErrorClick}>
      <AtTextarea {...otherProps} />
    </ErrorWrapper>
  )
}