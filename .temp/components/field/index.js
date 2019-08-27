import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import TextArea from "./TextArea/index";
import NumberInput from "./NumberInput/index";
import Percentage from "./Percentage/index";
import Currency from "./Currency/index";
import Boolean from "./Boolean/index";
import Date from "./Date/index";
import './index.scss';
export default class Control extends Taro.PureComponent {
  render() {
    const { child, onChange, label, name, value, isError, onErrorClick } = this.props;
    const { type, ...otherProps } = child;
    otherProps.error = isError;
    otherProps.value = value;
    otherProps.onChange = onChange;
    otherProps.onErrorClick = onErrorClick;
    if (type === 'TEXT') {
      return <AtInput name={name} type="text" {...otherProps} />;
    }
    if (type === 'TEXTAREA') {
      return <TextArea {...otherProps} />;
    }
    if (type === 'INT') {
      return <NumberInput name={name} {...otherProps} />;
    }
    if (type === 'DOUBLE') {
      return <NumberInput name={name} {...otherProps} />;
    }
    if (type === 'BOOLEAN') {
      return <Boolean {...otherProps} />;
    }
    if (type === 'CURRENCY') {
      return <Currency name={name} {...otherProps} />;
    }
    if (type === 'PERCENTAGE') {
      return <Percentage name={name} {...otherProps} />;
    }
    if (type === 'DATE') {
      return <Date label={label} {...otherProps} />;
    }
    return <View className="unregistered">未注册的字段类型</View>;
  }
}
Control.defaultProps = {
  child: {},
  onChange: () => {}
};
Control.options = {
  styleIsolation: 'shared'
};