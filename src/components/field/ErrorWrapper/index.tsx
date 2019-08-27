import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

interface ErrorWrapper {
  onErrorClick: Function;
  children: any;
  error: boolean;
}

export default ({onErrorClick, error, children}: ErrorWrapper) => (
  <View className="error-wrapper">
    {children}
    {error&&(
      <View className="error" onClick={onErrorClick}>
        <AtIcon value='alert-circle' size='16' color='#F00'></AtIcon>
      </View>
    )}
  </View>
)