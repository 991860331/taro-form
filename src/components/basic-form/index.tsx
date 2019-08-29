import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Context from './Context'
import { IBasicForm } from './interface'
import { defaultLayout } from './utils'
import './style/index.scss'
export default class Index extends Taro.PureComponent<IBasicForm> {

  static defaultProps = {
    colon: true,
		layout: defaultLayout,  
		fields: [],
		hideRequiredMark: false,
  }

  state = {

  }


  render() {
    const { children } = this.props
    return (
      <Context.Provider
        value={{
          instance: this, // web 端 context 会丢失，所以将父组件的实例缓存在子组件内
        }}
      >
        <View className="basic-form">
          {children}
        </View>
      </Context.Provider>
    )
  }
}


