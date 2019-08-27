import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import NumberInput from "../NumberInput/index";
const formatter = value => {
  if (!value) return null;
  return `${value}%`;
};
const parser = value => value.replace('%', '');

class AnonymousSFC extends Taro.Component {
  render() {
    const props = this.props;
    return <NumberInput {...props} formatter={formatter} parser={parser} />;
  }

}

export default AnonymousSFC;