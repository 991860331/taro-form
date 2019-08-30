import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCheckbox, AtActionSheet, AtActionSheetItem } from "taro-ui"
import FieldDecorator from '../FieldDecorator'
import { actionSheetCancelText } from '../utils'

interface option {
  label: string;
  value: any;
}

interface IMultiSelect {
  label?: string;
  options: option[];
  placeholder?: string;
  [otherProps: string]: any;
}
export default class MultiSelect extends Taro.PureComponent<IMultiSelect> {

  static defaultProps = {
    value: [],
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
  }

  getContent(): string {
    const { options, value } = this.props
    if (!Array.isArray(options) || !Array.isArray(value)) return ""
    const labels = options
    .filter((option: option) => value.includes(option.value))
    .map(option => option.label)
    return labels.join("、")
  }

  render() {
    const { visible } = this.state
    const { placeholder, label, value, options } = this.props
    const content = this.getContent()
    const selectedList = value || []
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
            <AtCheckbox
              options={options}
              selectedList={selectedList}
              onChange={this.handleChange}
            />
          </AtActionSheetItem>
        </AtActionSheet>
      </FieldDecorator>
    )
  }
}

