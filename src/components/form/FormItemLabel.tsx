import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cls from 'classnames'
import { IFormItemLabel } from './interface'
import { AtActionSheet, AtActionSheetItem } from "taro-ui"
import './style/FormItemLabel.scss'

const clsPrefix = 'cp-form-item-label'
export default class FormItemLabel extends Taro.PureComponent<IFormItemLabel> {

  static defaultProps = {
    rules: [],
  }

  state = {
    visible: false,
  }

  handleViewHelp = (): void => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    const { visible } = this.state
    const { children, rules, colon, hideRequiredMark, isHorizontal, help } = this.props
    const isRequired: boolean = rules.find(rule => rule.required) && !hideRequiredMark
    return (
      <View>
        <View className={cls(clsPrefix, {
          [`${clsPrefix}-vertical`]: !isHorizontal,
        })}>
          <Text 
            onClick={this.handleViewHelp}
            className={cls("position-relative", {
              [`${clsPrefix}-help`]: help
            })}
          >
            {isRequired&&(
              <Text className={`${clsPrefix}-required-star`}>*</Text>
            )}
            {children}
          </Text>
          {colon&&(
            <Text className={`${clsPrefix}-colon`}>:</Text>
          )}
        </View>
        <AtActionSheet 
          onClose={this.onClose}
          isOpened={visible}
        >
          <View className={`${clsPrefix}-help-view`}>{help}</View>
        </AtActionSheet>
      </View>
    )
  }
} 