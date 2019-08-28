import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { AtTextarea } from 'taro-ui';
import { View } from '@tarojs/components';
import ErrorWrapper from "../ErrorWrapper/index";
import './index.scss';

class AnonymousSFC extends Taro.Component {
  render() {
    const props = this.props;

    const { onErrorClick, error, ...otherProps } = props;
    return <View className="textarea-wrapper">
      <ErrorWrapper error={error} onErrorClick={onErrorClick}>
        <AtTextarea {...otherProps} />
      </ErrorWrapper>
    </View>;
  }

}

export default AnonymousSFC;