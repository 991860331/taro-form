import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Text, View } from '@tarojs/components';
import { AtSwitch } from 'taro-ui';
import ErrorWrapper from "../ErrorWrapper/index";
import './index.scss';

class AnonymousSFC extends Taro.Component {
  render() {
    const props = this.props;

    const { error, onErrorClick, options, value = false, ...otherProps } = props;
    if (!Array.isArray(options) || options.length !== 2 || !options.find(option => option.value === true) || !options.find(option => option.value === false)) {
      return null;
    }
    const selectedOption = options.find(option => option.value === value);
    const selectedText = selectedOption ? selectedOption.title : "";
    return <ErrorWrapper error={error} onErrorClick={onErrorClick}>
      <View className="boolean-wrapper">
        <Text className="selected-text">{selectedText}</Text>
        <AtSwitch {...otherProps} checked={value} />
      </View>
    </ErrorWrapper>;
  }

}

export default AnonymousSFC;