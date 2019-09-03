import Taro from '@tarojs/taro'
import { Map, View, Text } from '@tarojs/components'

const weapp: boolean = process.env.TARO_ENV === 'weapp'

interface ICpMap {
  value: any;
  [otherProps: string]: any;
}
export default class CpMap extends Taro.PureComponent<ICpMap> {

  static defaultProps = {

  }

  renderMap() {
    const props = this.getMapConfig()
    const { longitude, latitude, markers } = props
    if (weapp) {
      return (
        <Map 
          show-location 
          show-compass 
          enable-zoom 
          markers={markers}
          latitude={latitude} 
          longitude={longitude} 
          // onUpdated={() => {console.log('render')}}
          onMarkerTap={e => {console.log(e)}}
          // onTap={e => {console.log(e)}}
          onPoitap={e => {console.log(e)}}
          onRegionChange={e => {console.log(e)}}
        />
      )
    } else {
      return <Text>地图</Text>
    }
  }

  formatValue() {
    const { value } = this.props
    if (!value) return 
    if (typeof value === 'string') {
      try {
        const jsonValue = JSON.parse(value)
        return jsonValue
      } catch (error) {
        console.log(error)
      }
    }
    if (typeof value === 'object') {
      return value
    }
  }

  getMapConfig() {
    const value = this.formatValue()
    const props: any = {}
    if (value && value.latlng) {
      const { poiaddress } = value
      const { lat, lng } = value.latlng
      props.latitude = lat
      props.longitude = lng
      props.markers = [{
        ...props,
        title: poiaddress,
      }]
    }
    return props
  }

  render() {
    const renderMap = this.renderMap()
    return (
      <View>{renderMap}</View>
    )
  }
}

