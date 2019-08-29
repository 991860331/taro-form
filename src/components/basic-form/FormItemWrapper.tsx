import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cls from 'classnames'
import { AtIcon } from 'taro-ui'
import { IFormItemWrapper } from './interface'
import './style/FormItemWrapper.scss'

const clsPrefix = 'form-item-wrapper'

export default class FormItemWrapper extends Taro.PureComponent<IFormItemWrapper> {

  render() {
    const { children, border, clear, renderIcon, isError } = this.props
    return (
      <View className={cls(clsPrefix, {
          [`${clsPrefix}-border`]: border,
        })}
      >
        <View className={`${clsPrefix}-children`}>{children}</View>
        <View className={`${clsPrefix}-tools`}>
          {/* 没有错误，有清除属性，有值则显示清除按钮 */}
          {!isError&&clear&&(
            <AtIcon value='close-circle' size='20' color='#999'></AtIcon>
          )}
          {/* 没有错误，没有值则显示字段提示按钮 */}
          {!isError&&(
            <View>{renderIcon}</View>
          )}
          {/* 错误按钮的等级最高, 有错误就显示错误提示按钮 */}
          {isError&&(
            <AtIcon value='alert-circle' size='20' color='#F00'></AtIcon>
          )}
        </View>
      </View>
    )
  }
}