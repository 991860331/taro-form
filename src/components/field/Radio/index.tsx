import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtRadio, AtActionSheet, AtActionSheetItem } from "taro-ui"
import FieldDecorator from '../FieldDecorator'
import { actionSheetCancelText } from '../utils'

interface IRadio {
  label?: string;
  options: [];
  placeholder?: string;
  [otherProps: string]: any;
}
export default class Radio extends Taro.PureComponent<IRadio> {

  static defaultProps = {
    options: [],
  }

  state = {
    visible: false,
  }

  handleVisible = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  handleChange = (value) => {
    const { onChange } = this.props
    onChange(value)
    this.onClose()
  }

  getContent(): string {
    const { options, value } = this.props
    if (!Array.isArray(options)) return ""
    const option = options.find((option: {value: any, label: string}) => option.value === value)
    if (!option) return ""
    return option.label
  }

  render() {
    const { visible } = this.state
    const { placeholder, label, value, options } = this.props
    const content = this.getContent()
    return (
      <FieldDecorator 
        onClick={this.handleVisible}
        content={content}
        placeholder={placeholder}
      >
        <AtActionSheet 
          title={label}
          onClose={this.onClose}
          isOpened={visible}
          cancelText={actionSheetCancelText} 
        >
          <AtActionSheetItem>
            <AtRadio
              options={options}
              value={value}
              onClick={this.handleChange}
            />
          </AtActionSheetItem>
        </AtActionSheet>
      </FieldDecorator>
    )
  }
}

