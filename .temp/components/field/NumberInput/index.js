import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { AtInput } from 'taro-ui';
// type=number 类型弹出的数字键盘无法输入 - ，所以使用 type=text

class AnonymousSFC extends Taro.Component {
  render() {
    const props = this.props;

    const { name, value, onChange, formatter, parser, ...otherProps } = props;
    const isFormatter = typeof formatter === 'function';
    const formatedValue = isFormatter ? formatter(value) : value;
    return <AtInput name={name} type="text" {...otherProps} value={formatedValue} border={false} onChange={value => {
      if (typeof parser === 'function') {
        const parseredValue = parser(value);
        onChange(parseredValue);
        return;
      }
      onChange(value);
    }} />;
  }

}

export default AnonymousSFC;