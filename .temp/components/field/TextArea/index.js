import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { AtTextarea } from 'taro-ui';
import ErrorWrapper from "../ErrorWrapper/index";

class AnonymousSFC extends Taro.Component {
  render() {
    const props = this.props;

    const { onErrorClick, error, ...otherProps } = props;
    return <ErrorWrapper error={error} onErrorClick={onErrorClick}>
      <AtTextarea {...otherProps} />
    </ErrorWrapper>;
  }

}

export default AnonymousSFC;