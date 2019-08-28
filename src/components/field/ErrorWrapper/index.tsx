import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

interface IErrorWrapper {
  onErrorClick: Function;
  children: any;
  error: boolean;
}

export default class ErrorWrapper extends Taro.PureComponent<IErrorWrapper> {

  static options = {
    styleIsolation: 'shared'
  }

  render() {
    const { onErrorClick, error, children } = this.props
    return (
      <View className="error-wrapper">
        {children}
        {error&&(
          <View className="error" onClick={onErrorClick}>
            <AtIcon value='alert-circle' size='16' color='#F00'></AtIcon>
          </View>
        )}
      </View>
    )
  }
}

