import Taro from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import { AtCalendar, AtActionSheet, AtActionSheetItem, AtIcon } from "taro-ui"
import ItemWrapper from '../ItemWrapper'


// Picker 组件暂时没有发现受控的打开方式，所以将 AtCalendar 放在 Picker 组件内，通过冒泡的方式自动打开

interface ITimestamp {
  label?: string;
  placeholder?: string;
  [otherProps: string]: any;
}
export default class Timestamp extends Taro.PureComponent<ITimestamp> {

  state = {
    date: "",
    isOpened: false,
    isVisibleDate: true,
  }

  onClick = () => {
    this.setState({
      isOpened: true,
    })
  }

  onClose = () => {
    this.setState({
      isOpened: false,
      isVisibleDate: true
    })
  }

  onSelectDate = ({value}) => {
    const { start } = value
    this.setState({
      date: start,
      isOpened: false,
      isVisibleDate: false,
    })
  }

  onPickerChange = ({detail}) => {
    const { value } = detail
    const { date } = this.state
    const { onChange } = this.props
    const timestamp = `${date} ${value}`
    onChange(timestamp)
    this.onClose()
  }

  onPickerCancel = () => {
    this.onClose()
  }

  getValue = () => {
    const { value } = this.props
    const res = {
      time: null,
      date: null,
    }
    if (value) {
      const t = value.split(" ")
      res.date = t[0] || null
      res.time = t[1] || null
    }
    return res
  }

  render() {
    const { isOpened, isVisibleDate } = this.state
    const { placeholder, label, value, error, onErrorClick } = this.props
    const { time, date } = this.getValue()
    return (
      <ItemWrapper 
        onClick={this.onClick}
        placeholder={placeholder}
        renderIcon={<AtIcon value='clock' size='16' color='#6190E8'></AtIcon>}
        contentText={value}
        error={error}
        onErrorClick={onErrorClick}
      >
        <AtActionSheet 
          title={label}
          onClose={this.onClose}
          isOpened={isOpened}
          cancelText='关闭' 
        >
          <AtActionSheetItem>
            <Picker 
              mode='time' 
              value={time}
              onChange={this.onPickerChange} 
              onCancel={this.onPickerCancel}>
              {isVisibleDate&&(
                <AtCalendar 
                  isVertical
                  currentDate={date}
                  onSelectDate={this.onSelectDate}
                />)}
            </Picker>
          </AtActionSheetItem>
        </AtActionSheet>
      </ItemWrapper>
    )
  }
}

