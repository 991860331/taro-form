import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtInput, AtTextarea } from 'taro-ui';
export default class Control extends Taro.PureComponent {
  render() {
    const { child, onChange, name, value, isError, onErrorClick } = this.props;
    const { type, ...otherProps } = child;
    otherProps.error = isError;
    otherProps.value = value;
    otherProps.onChange = onChange;
    otherProps.onErrorClick = onErrorClick;
    if (type === 'TEXT') {
      return <View>
          <AtInput name={name} type="text" {...otherProps} />
        </View>;
    }
    if (type === 'TEXTAREA') {
      return <View>
          <AtTextarea {...otherProps} />
        </View>;
    }
  }
}
Control.defaultProps = {
  child: {},
  onChange: () => {}
};