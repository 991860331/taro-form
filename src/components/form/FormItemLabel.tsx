import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Context from './Context'
import { IFormItemLabel } from './interface'
import './style/FormItemLabel.scss'


export default class FormItemLabel extends Taro.PureComponent<IFormItemLabel> {

  static contextType = Context

  static defaultProps = {
    rules: [],
  }

  render() {
    const { colon, hideRequiredMark } = this.context
    const { children, rules } = this.props
    const isRequired = rules.find(rule => rule.required)
    return (
      <View>
        {isRequired&&!hideRequiredMark&&(
          <Text className="required-star">*</Text>
        )}
        {children}
        {colon&&(
          <Text className="colon">:</Text>
        )}
      </View>
    )
  }
} 