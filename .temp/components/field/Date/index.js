import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { AtCalendar, AtActionSheet, AtActionSheetItem } from "taro-ui";
import FieldDecorator from "../FieldDecorator/index";
import { actionSheetCancelText } from '../utils';
export default class Date extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
    this.handleVisible = () => {
      this.setState({
        visible: true
      });
    };
    this.onClose = () => {
      this.setState({
        visible: false
      });
    };
    this.onSelectDate = ({ value }) => {
      const { onChange } = this.props;
      const { start } = value;
      onChange(start);
      this.onClose();
    };
  }
  render() {
    const { visible } = this.state;
    const { placeholder, label, value } = this.props;
    return <FieldDecorator onClick={this.handleVisible} content={value} placeholder={placeholder}>
        <AtActionSheet title={label} onClose={this.onClose} isOpened={visible} cancelText={actionSheetCancelText}>
          <AtActionSheetItem>
            <AtCalendar isVertical currentDate={value} onSelectDate={this.onSelectDate} />
          </AtActionSheetItem>
        </AtActionSheet>
      </FieldDecorator>;
  }
}