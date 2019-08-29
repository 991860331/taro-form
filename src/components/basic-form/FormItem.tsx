import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cls from 'classnames'
import { IFormItem } from './interface'
import Context from './Context'
import FormItemLabel from './FormItemLabel'
import FormItemWrapper from './FormItemWrapper'
import { defaultLayout } from './utils'
import './style/FormItem.scss'

const clsPrefix = 'form-item'

// @tarojs/taro  v1.3.13
// 小程序端 Context 的变化不会引起 PureComponent 的更新    
// web 端 Context 在。。。。情况下, 会丢失
export default class FormItem extends Taro.Component<IFormItem> {

  static options = {
    styleIsolation: 'shared',
  }

  static contextType = Context

  static defaultProps = {
    colon: true,
    border: true,
    required: false,
  }

  state = {

  }

  formInstance: any = null

  componentDidMount() {
    this.formInstance = this.context.instance
  }

  // 兼容 web 端 Context 
  getContext() {
    if (this.context.instance) {
      return this.context.instance.props
    }
    if (this.formInstance) {
      return this.formInstance.props
    }
    return {}
  }

  render() {
    const { renderLabel, label, children, border, required, isError, clear, renderIcon } = this.props
    const { layout, colon } = this.getContext()
    const isHorizontal = layout === 'horizontal'
    return (
      <FormItemWrapper border={border} clear={clear} renderIcon={<View>{renderIcon}</View>}>
        <View className={cls(clsPrefix, {
            'hasError': isError,
            [`${clsPrefix}-vertical`]: !isHorizontal,
            [`${clsPrefix}-horizontal`]: isHorizontal,
          })}
        >
          <View className={`${clsPrefix}-label`}>
            {/* 这里是为了让使用者能够自定义 label  没找到好一点的方法 */}
            {label&&(
              <FormItemLabel required={required} colon={colon}>
                {label}
              </FormItemLabel>
            )}
            {!label&&(
              <FormItemLabel required={required} colon={colon}>
                {renderLabel}
              </FormItemLabel>
            )}
          </View>
          <View className={`${clsPrefix}-content`}>
            {children}
          </View>
        </View>
      </FormItemWrapper>
    )
  }
}