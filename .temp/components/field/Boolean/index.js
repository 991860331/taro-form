import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View } from '@tarojs/components';
import { AtSwitch } from 'taro-ui';
import './index.scss';
const clsPrefix = 'boolean-wrapper';

class AnonymousSFC extends Taro.Component {
  render() {
    const props = this.props;

    const { error, onErrorClick, options, value = false, ...otherProps } = props;
    if (!Array.isArray(options) || options.length !== 2 || !options.find(option => option.value === true) || !options.find(option => option.value === false)) {
      return null;
    }
    const selectedOption = options.find(option => option.value === value);
    const selectedText = selectedOption ? selectedOption.title : "";
    return <View className={clsPrefix}>
      <AtSwitch {...otherProps} border={false} checked={value} title={selectedText} />
    </View>;
  }

}

export default AnonymousSFC;