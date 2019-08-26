import Taro from '@tarojs/taro'
import { View, Text, Block } from '@tarojs/components'
import cls from 'classnames'
import { AtToast } from "taro-ui"
import FormItemLabel from './FormItemLabel'
import { IFormItem } from './interface'
import Control from '../field'
import './style/FormItem.scss'


export default class FormItem extends Taro.PureComponent<IFormItem> {

  static defaultProps = {
    field: {},
    error: [],
  }

  state = {
    isOpened: false,
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

  onErrorClick = () => {
    this.setState({
      isOpened: true
    })
  }

  onToastClose = () => {
    this.setState({
      isOpened: false
    })
  }

  render() {
    const { isOpened } = this.state
    const { field, value, error, hideRequiredMark, colon, layout } = this.props
    const { fieldCode, label, rules, child } = field
    if (!child) return null
    const { type } = child
    const isError = error.length > 0
    const isHorizontal = layout === 'horizontal'
    const showErrors = error.join("\n")
    return (
      <View 
        className={cls("form-item", {
          horizontal: isHorizontal
        })}
      >
        <FormItemLabel 
          colon={colon}
          rules={rules}
          layout={layout}
          isError={isError} 
          fieldType={type}
          hideRequiredMark={hideRequiredMark}
        >
          {label}
        </FormItemLabel>
        <View className="item-component">
          <Control 
            name={fieldCode} 
            value={value} 
            child={child} 
            isError={isError}
            onChange={this.onChange} 
            onErrorClick={this.onErrorClick}
          />
          <View>
            <AtToast 
              hasMask
              duration={3000}
              isOpened={isOpened}
              text={showErrors} 
              onClose={this.onToastClose}
            >
            </AtToast>
          </View>
        </View>
      </View>
    )
  }
}
