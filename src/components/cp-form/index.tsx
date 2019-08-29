import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtInput, AtIcon } from 'taro-ui'
import BasicForm from '../basic-form'
import FormItem from '../basic-form/FormItem'
import { ICpForm } from './interface'
import './style/index.scss'

export default class Index extends Taro.PureComponent<ICpForm> {

  static options = {
    styleIsolation: 'shared',
  }

  static defaultProps = {
    colon: true,
		layout: 'horizontal',  // horizontal   vertical
		fields: [],
		hideRequiredMark: false,
  }

  state = {

  }

  render() {
    const { colon } = this.props
    return (
      <View className="cp-form">
        <BasicForm {...this.props}>
          <FormItem
            required 
            colon={colon} 
            renderIcon={<AtIcon onClick={() => {console.log('tip')}} value='clock' size='20' color='#6190E8'></AtIcon>}
            renderLabel={<Text>姓名</Text>}
          >
            <AtInput name="name" value="shisongyan" border={false} />
          </FormItem>
          <FormItem 
            clear 
            label="年龄"
          >
            <AtInput name="age" value="18" border={false} />
          </FormItem>
        </BasicForm>
      </View>
    )
  }
}