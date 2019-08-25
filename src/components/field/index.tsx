import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput, AtTextarea } from 'taro-ui'
import { Ichild } from '../form/interface'

interface IControl {
  name: string;
  child: Ichild;
  value: any;
  onChange: Function;
}


export default class Control extends Taro.PureComponent<IControl> {

  static defaultProps = {
    child: {},
    onChange: () => {},
  }

  render() {
    const { child, onChange, name, value } = this.props
    const { type, ...otherProps } = child
    otherProps.value = value
    otherProps.onChange = onChange
    console.log('render', name)
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
