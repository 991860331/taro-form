import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cls from 'classnames'
import { IFormItemLabel } from './interface'
import './style/FormItemLabel.scss'

const topPlacement = ['TEXTAREA']
export default class FormItemLabel extends Taro.PureComponent<IFormItemLabel> {

  static defaultProps = {
    rules: [],
    isError: false,
  }

  render() {
    const { children, rules, isError, fieldType, colon, hideRequiredMark, layout } = this.props
    const isRequired = rules.find(rule => rule.required)
    const isTop = topPlacement.includes(fieldType)
    const isVertical = layout === 'vertical' 
    return (
      <View className={cls("item-label", {
          error: isError,
          vertical: isVertical,
          topPlacement: isTop,
        })}
      >
        {isRequired&&!hideRequiredMark&&(
          <Text className="required-star">*</Text>
        )}
        <Text>{children}</Text>
        {colon&&(
          <Text className="colon">:</Text>
        )}
      </View>
    )
  }
} 