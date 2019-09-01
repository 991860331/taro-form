import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCalendar, AtActionSheet, AtActionSheetItem, AtIcon } from "taro-ui"


interface IDisplayText {
  value: any;
}
export default class DisplayText extends Taro.PureComponent<IDisplayText> {

  static defaultProps = {
    value: "-",
  }

  render() {
    const { value } = this.props
    return (
      <View>{value}</View>
    )
  }
}

