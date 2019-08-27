import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput, AtTextarea, AtToast } from 'taro-ui'
import { Ichild } from '../form/interface'
import TextArea from './TextArea'
import NumberInput from './NumberInput'
import Boolean from './Boolean'
import './index.scss'

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

  static options = {
    styleIsolation: 'shared'
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
          <TextArea 
            {...otherProps}
          />
        </View>
      )
    }
    if (type === 'INT') {
      return (
        <View>
          <NumberInput 
            name={name}
            {...otherProps}
          />
        </View>
      )
    }
    if (type === 'DOUBLE') {
      return (
        <NumberInput 
          name={name}
          {...otherProps}
        />
      )
    }
    if (type === 'BOOLEAN') {
      return (
        <Boolean 
          {...otherProps}
        />
      )
    }
    return <View className="unregistered">未注册的字段类型</View>
  }
}
