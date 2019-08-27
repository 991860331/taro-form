import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCalendar, AtActionSheet, AtActionSheetItem, AtIcon } from "taro-ui"
import ItemWrapper from '../ItemWrapper'

interface IDate {
  label?: string;
  placeholder?: string;
  [otherProps: string]: any;
}
export default class Date extends Taro.PureComponent<IDate> {

  state = {
    isOpened: false,
  }

  onClick = () => {
    this.setState({
      isOpened: true,
    })
  }

  onClose = () => {
    this.setState({
      isOpened: false,
    })
  }

  onSelectDate = ({value}) => {
    const { onChange } = this.props
    const { start } = value
    onChange(start)
    this.onClose()
  }

  render() {
    const { isOpened } = this.state
    const { placeholder, label, value, error } = this.props
    return (
      <ItemWrapper 
        onClick={this.onClick}
        placeholder={placeholder}
        renderIcon={<AtIcon value='clock' size='16' color='#6190E8'></AtIcon>}
        contentText={value}
        error={error}
      >
        <AtActionSheet 
          title={label}
          onClose={this.onClose}
          isOpened={isOpened}
          cancelText='关闭' 
        >
          <AtActionSheetItem>
            <AtCalendar 
              isVertical
              currentDate={value}
              onSelectDate={this.onSelectDate}
            />
          </AtActionSheetItem>
        </AtActionSheet>
      </ItemWrapper>
    )
  }
}

