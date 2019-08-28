import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';
export default class ErrorWrapper extends Taro.PureComponent {
  render() {
    const { onErrorClick, error, children } = this.props;
    return <View className="error-wrapper">
        {children}
        {error && <View className="error" onClick={onErrorClick}>
            <AtIcon value="alert-circle" size="16" color="#F00"></AtIcon>
          </View>}
      </View>;
  }
}
ErrorWrapper.options = {
  styleIsolation: 'shared'
};