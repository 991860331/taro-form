import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Context from './Context'

export default class Index extends Taro.PureComponent {

  static defaultProps = {
    
  }

  state = {

  }

  render() {
    const { children, layout, hideRequiredMark, colon, onFieldsChange } = this.props
    return (
      <Context.Provider
        value={{
          colon,
          layout,
          onFieldsChange,
          hideRequiredMark,
        }}
      >
        <View>
          {children}
        </View>
      </Context.Provider>
    )
  }
}


