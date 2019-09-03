import Taro from '@tarojs/taro'
import { View, Text, Block } from '@tarojs/components'
import cls from 'classnames'
import { IFormItem } from './interface'
import Control from '../field'
import FormItemLabel from './FormItemLabel'
import FormItemWrapper from './FormItemWrapper'
import './style/FormItem.scss'


const clsPrefix = 'cp-form-item'
export default class FormItem extends Taro.PureComponent<IFormItem> {

  static defaultProps = {
    field: {},
    errors: [],
  }

  static options = {
    styleIsolation: 'shared'
  } 

  state = {

  }

  onChange = (value, event) => {
    const { field, onChange } = this.props
    const { fieldCode } = field
    let fieldValue = value
    
    if (value && value.target && typeof value.target === 'object') {
      fieldValue = value.target.value
    }
    onChange(fieldCode, fieldValue)
  }

  onClear = () => {
    const { field, onChange } = this.props
    const { fieldCode } = field
    onChange(fieldCode, null)
  }

  render() {
    const { field, value, errors, hideRequiredMark, colon, layout, border } = this.props
    const { fieldCode, label, rules, child, isAlwaysVertical, isFullRow, clear, help } = field
    if (!child) return null
    const isHorizontal = layout === 'horizontal' && !isAlwaysVertical
    return (
      <FormItemWrapper 
        clear={clear}
        value={value}
        errors={errors}
        border={border}
        onClear={this.onClear}
        isFullRow={isFullRow}
      >
        <View className={cls(clsPrefix, {
            [`${clsPrefix}-horizontal`]: isHorizontal,
            [`${clsPrefix}-error`]: errors.length,
          })}
        >
          <FormItemLabel
            help={help}
            rules={rules}
            colon={colon}
            isHorizontal={isHorizontal}
            hideRequiredMark={hideRequiredMark}
          >
            {label}
          </FormItemLabel>
          <View className={`${clsPrefix}-control`}>
            <Control 
              name={fieldCode}
              value={value} 
              label={label}
              child={child} 
              onChange={this.onChange} 
            />
          </View>
        </View>
      </FormItemWrapper>
    )
  }
}
