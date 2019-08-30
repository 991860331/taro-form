import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtInput, AtTextarea } from 'taro-ui';
import NumberInput from "./NumberInput/index";
import Percentage from "./Percentage/index";
import Currency from "./Currency/index";
import Boolean from "./Boolean/index";
import Date from "./Date/index";
import CpRadio from "./Radio/index";
import Multiselect from "./Multiselect/index";
import Timestamp from "./Timestamp/index";
import './index.scss';
// 大量的 if 但是没办法
export default class Control extends Taro.PureComponent {
  // static options = {
  //   styleIsolation: 'shared'
  // } 
  render() {
    const { child, onChange, label, name, value } = this.props;
    const { type, ...otherProps } = child;
    otherProps.value = value;
    otherProps.onChange = onChange;
    if (type === 'TEXT') {
      return <AtInput border={false} name={name} type="text" {...otherProps} />;
    }
    if (type === 'TEXTAREA') {
      const value = otherProps.value || "";
      return <AtTextarea {...otherProps} value={value} />;
    }
    if (type === 'INT' || type === 'DOUBLE') {
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
    if (type === 'TIMESTAMP') {
      return <Timestamp label={label} {...otherProps} />;
    }
    if (type === 'RADIO') {
      return <CpRadio label={label} {...otherProps} />;
    }
    if (type === 'MULTISELECT') {
      return <Multiselect label={label} {...otherProps} />;
    }
    if (type === 'RADIOTREE') {
      return 123;
    }
    return <View className="unregistered">未注册的字段类型</View>;
  }
}
Control.defaultProps = {
  child: {},
  onChange: () => {}
};