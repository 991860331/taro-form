import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput, AtTextarea, AtToast } from 'taro-ui'
import { Ichild } from '../form/interface'
import TextArea from './TextArea'
import NumberInput from './NumberInput'
import Percentage from './Percentage'
import Currency from './Currency'
import Boolean from './Boolean'
import Date from './Date'
import './index.scss'

interface IControl {
  name: string;
  child: Ichild;
  value: any;
  isError: boolean;
  onChange: Function;
  onErrorClick: Function;
  label?: string;
  [otherProps: string]: any;
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
    const { child, onChange, label, name, value, isError, onErrorClick } = this.props
    const { type, ...otherProps } = child
    otherProps.error = isError
    otherProps.value = value
    otherProps.onChange = onChange
    otherProps.onErrorClick = onErrorClick
    if (type === 'TEXT') {
      return (
        <AtInput 
          name={name}
          type='text'
          {...otherProps}
        />
      )
    }
    if (type === 'TEXTAREA') {
      return (
        <TextArea 
          {...otherProps}
        />
      )
    }
    if (type === 'INT') {
      return (
        <NumberInput 
          name={name}
          {...otherProps}
        />
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
    if (type === 'CURRENCY') {
      return (
        <Currency 
          name={name}
          {...otherProps}
        />
      )
    }
    if (type === 'PERCENTAGE') {
      return (
        <Percentage 
          name={name}
          {...otherProps}
        />
      )
    }
    if (type === 'DATE') {
      return (
        <Date 
          label={label}
          {...otherProps}
        />
      )
    }
    return <View className="unregistered">未注册的字段类型</View>
  }
}
