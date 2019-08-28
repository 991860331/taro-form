import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cls from 'classnames'
import { IFormItemLabel } from './interface'
import './style/FormItemLabel.scss'


export default class FormItemLabel extends Taro.PureComponent<IFormItemLabel> {

  static defaultProps = {
    rules: [],
    isError: false,
  }

  render() {
    const { children, rules, isError, colon, hideRequiredMark, layout } = this.props
    const isRequired = rules.find(rule => rule.required)
    const isVertical = layout === 'vertical' 
    return (
      <View className={cls("item-label", {
          vertical: isVertical,
          errorLabel: isError,
        })}
      >
        <Text className="label-wrapper">
          {isRequired&&!hideRequiredMark&&(
            <Text className="required-star">*</Text>
          )}
          {children}
        </Text>
        {colon&&(
          <Text className="colon">:</Text>
        )}
      </View>
    )
  }
} 