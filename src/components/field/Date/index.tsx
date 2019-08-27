import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCalendar, AtActionSheet, AtActionSheetItem } from "taro-ui"


export default (props) => {
  return (
    <AtActionSheet isOpened>
      <AtActionSheetItem>
        按钮一
      </AtActionSheetItem>
      <AtActionSheetItem>
        按钮二
      </AtActionSheetItem>
    </AtActionSheet>
  )
}


