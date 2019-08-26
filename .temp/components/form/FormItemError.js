import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './style/FormItemError.scss';
export default class FormItemLabel extends Taro.PureComponent {
  render() {
    const { data } = this.props;
    return <View className="error-message">
        {data.map(error => {
        return <View key={error}>{error}</View>;
      })}
      </View>;
  }
}
FormItemLabel.defaultProps = {
  data: []
};