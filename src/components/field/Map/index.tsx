import Taro from '@tarojs/taro'
import { Map, View, Text } from '@tarojs/components'

const weapp: boolean = process.env.TARO_ENV === 'weapp'

interface ICpMap {
  value: string;
  [otherProps: string]: any;
}
export default class CpMap extends Taro.PureComponent<ICpMap> {

  static defaultProps = {
    child: {},
  }

  renderMap() {
    if (weapp) {
      return <Map />
    } else {
      return <Text>地图</Text>
    }
  }

  render() {
    const renderMap = this.renderMap()
    return (
      <View>{renderMap}</View>
    )
  }
}

