import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtFloatLayout } from 'taro-ui'
import './index.scss'

interface ICpFloatLayout {
  isOpened: boolean;
  title?: string;
  onClose?: Function;
  renderHeader?: any;
  renderFooter?: any;
}

const clsPrefix = 'cp-float-layout'

export default class CpFloatLayout extends Taro.PureComponent<ICpFloatLayout> {

  static options = {
    styleIsolation: 'shared',
  }

  static defaultProps = {
    onClose: () => {},
  }

  state = {

  }

  onClose = () => {
    const { onClose } = this.props
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  render() {
    const { isOpened, renderHeader, renderFooter children } = this.props
    return (
      <View className={clsPrefix}>
        <AtFloatLayout 
          onClose={this.onClose} 
          isOpened={isOpened} 
        > 
          <View className={`${clsPrefix}-wrapper`}>
            <View className={`${clsPrefix}-header`}>{renderHeader}</View>
            <View className={`${clsPrefix}-content`}>
              <View>{children}</View>
              {/* <ScrollView style={{height:'200px'}} scrollY><View>{children}</View></ScrollView> */}
            </View>
            <View className={`${clsPrefix}-footer`}>{renderFooter}</View>
          </View>
        </AtFloatLayout>
      </View>
    )
  }
}