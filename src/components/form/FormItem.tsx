import Taro from '@tarojs/taro'
import { View, Text, Block } from '@tarojs/components'
import FormItemLabel from './FormItemLabel'
import Context from './Context'
import { IFormItem } from './interface'
import Control from '../field'
import './style/FormItem.scss'


export default class FormItem extends Taro.PureComponent<IFormItem> {

  static contextType = Context
  
  static defaultProps = {
    field: {},
  }

  onChange = (value, event) => {
    const { field, onChange } = this.props
    const { fieldCode } = field
    if (value.target && typeof value.target === 'object') {
      onChange(fieldCode, value.target.value)
    } else {
      onChange(fieldCode, value)
    }
  }

  render() {
    const { field, value } = this.props
    const { fieldCode, label, rules, child } = field
    return (
      <View className="form-item">
        <FormItemLabel rules={rules}>{label}</FormItemLabel>
        <View className="item-component">
          <Control value={value} name={fieldCode} onChange={this.onChange} child={child} />
        </View>
        <View className="error-message">这里是报错信息</View>
      </View>
    )
  }
}
