import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

class AnonymousSFC extends Taro.Component {
  render() {
    const {
      children: children
    } = this.props;
    const { onErrorClick, error } = this.props;
    return <View className="error-wrapper">
    {children}
    {error && <View className="error" onClick={onErrorClick}>
        <AtIcon value="alert-circle" size="16" color="#F00"></AtIcon>
      </View>}
  </View>;
  }

}

export default AnonymousSFC;