import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { IFormItemLabel } from './interface'
import Context from './Context'
import './style/FormItemLabel.scss'

const clsPrefix = 'form-item-label'

export default (props: IFormItemLabel) => {
  const { required, colon } = props
  return (
    <View className={clsPrefix}>
      {required&&(
        <Text className="required-star">*</Text>
      )}
      <View>
        {props.children}
        {colon&&(
          <Text className="colon">:</Text>
        )}
      </View>
    </View>
  )
}