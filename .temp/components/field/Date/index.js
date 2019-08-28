import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { AtCalendar, AtActionSheet, AtActionSheetItem, AtIcon } from "taro-ui";
import ItemWrapper from "../ItemWrapper/index";
export default class Date extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false
    };
    this.onClick = () => {
      this.setState({
        isOpened: true
      });
    };
    this.onClose = () => {
      this.setState({
        isOpened: false
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
    const { isOpened } = this.state;
    const { placeholder, label, value, error, onErrorClick } = this.props;
    return <ItemWrapper onClick={this.onClick} placeholder={placeholder} renderIcon={<AtIcon value="clock" size="16" color="#6190E8"></AtIcon>} contentText={value} error={error} onErrorClick={onErrorClick}>
        <AtActionSheet title={label} onClose={this.onClose} isOpened={isOpened} cancelText="关闭">
          <AtActionSheetItem>
            <AtCalendar isVertical currentDate={value} onSelectDate={this.onSelectDate} />
          </AtActionSheetItem>
        </AtActionSheet>
      </ItemWrapper>;
  }
}