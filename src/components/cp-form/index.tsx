import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import BasicForm from '../basic-form'
import FormItem from '../basic-form/FormItem'

export default class Index extends Taro.PureComponent {

  state = {

  }

  render() {

    return (
      <BasicForm {...this.props}>
        <FormItem
          label="name"
        >
          1234
        </FormItem>
        <View>shisongyan</View>
      </BasicForm>
    )
  }
}