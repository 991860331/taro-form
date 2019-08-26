import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput, AtTextarea, AtToast } from 'taro-ui'
import { Ichild } from '../form/interface'

interface IControl {
  name: string;
  child: Ichild;
  value: any;
  isError: boolean;
  onChange: Function;
  onErrorClick: Function;
}


export default class Control extends Taro.PureComponent<IControl> {

  static defaultProps = {
    child: {},
    onChange: () => {},
  }

  render() {
    const { child, onChange, name, value, isError, onErrorClick } = this.props
    const { type, ...otherProps } = child
    otherProps.error = isError
    otherProps.value = value
    otherProps.onChange = onChange
    otherProps.onErrorClick = onErrorClick
    if (type === 'TEXT') {
      return (
        <View>
          <AtInput 
            name={name}
            type='text'
            {...otherProps}
          />
        </View>
      )
    }
    if (type === 'TEXTAREA') {
      return (
        <View>
          <AtTextarea 
            {...otherProps}
          />
        </View>
      )
    }
  }
}
