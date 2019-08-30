import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cls from 'classnames'
import { AtIcon, AtToast } from 'taro-ui'
import { IFormItemWrapper } from './interface'
import { isAvailableValue } from './utils'
import './style/FormItemWrapper.scss'

const weapp: boolean = process.env.TARO_ENV === 'weapp'
const clsPrefix: string = 'cp-form-item-wrapper'
const toolsIconSize: number = 20

export default class FormItemWrapper extends Taro.PureComponent<IFormItemWrapper> {

  static defaultProps = {
    clear: true,
    errors: [],
  }

  state = {
    visible: false,
  }

  handleViewErrors = (): void => {
    this.setState({
      visible: true
    })
  }

  onToastClose = (): void => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible } = this.state
    const { children, border, clear, renderIcon, errors, value, onClear } = this.props
    const isError: boolean = errors.length > 0
    const toastErrors: string = errors.join("\n")
    const availableValue: boolean = isAvailableValue(value)
    return (
      <View className={cls(clsPrefix, {
          [`${clsPrefix}-border`]: border,
        })}
      >
        <View className={`${clsPrefix}-children`}>{children}</View>
        <View className={cls(`${clsPrefix}-tools`, {
          [`${clsPrefix}-tools-weapp`]: weapp,  
        })}>
          {/* 没有错误，有清除属性，有值则显示清除按钮 */}
          {!isError&&clear&&availableValue&&(
            <AtIcon onClick={onClear} value='close-circle' size={toolsIconSize} color='#999'></AtIcon>
          )}
          {/* 没有错误，没有值则显示字段提示按钮 */}
          {!isError&&!availableValue&&(
            <View>{renderIcon}</View>
          )}
          {/* 错误按钮的等级最高, 有错误就显示错误提示按钮 */}
          {isError&&(
            <AtIcon onClick={this.handleViewErrors} value='alert-circle' size={toolsIconSize} color='#F00'></AtIcon>
          )}
        </View>
        {isError&&(
          <AtToast 
            text={toastErrors}
            onClose={this.onToastClose}
            duration={1500}
            isOpened={visible}
          />)}
      </View>
    )
  }
}