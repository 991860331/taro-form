import Taro from '@tarojs/taro'
import { Map, View, Text } from '@tarojs/components'
import { AtFloatLayout } from "taro-ui"
import './index.scss'

const weapp: boolean = process.env.TARO_ENV === 'weapp'

const clsPrefix = 'map-wrapper'
interface ICpMap {
  value: any;
  [otherProps: string]: any;
}
export default class CpMap extends Taro.PureComponent<ICpMap> {

  static defaultProps = {

  }

  state = {
    visible: false,
  }

  // renderViewMap() {
  //   const props = this.getMapConfig()
  //   const { longitude, latitude, markers } = props
  //   if (weapp) {
  //     return (
  //       <Map 
  //         show-location 
  //         show-compass 
  //         enable-zoom 
  //         markers={markers}
  //         latitude={latitude} 
  //         longitude={longitude} 
  //         // onUpdated={() => {console.log('render')}}
  //         onTap={this.handleVisible}
  //         // onRegionChange={e => {console.log(e)}}
  //       />
  //     )
  //   } else {
  //     return <Text>地图</Text>
  //   }
  // }

  renderSelectMap() {
    const props = this.getMapConfig()
    const { longitude, latitude, markers } = props
    if (weapp) {
      return (
        <Map 
          id="select-map"
          show-location 
          show-compass 
          enable-zoom 
          markers={markers}
          latitude={latitude} 
          longitude={longitude} 
          onRegionChange={this.handleRegionChange}
        />
      )
    } else {
      return <Text>地图</Text>
    }
  }

  handleRegionChange = event => {
    if (event.type === 'end') {
      const mapContext = Taro.createMapContext('select-map', this)
      mapContext.getCenterLocation({
        success(res) {
          this.setState({
            center: res
          })
        },
      })
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

  handleVisible = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    // const renderViewMap = this.renderViewMap()
    const renderSelectMap = this.renderSelectMap()
    const { visible } = this.state
    const { label } = this.props
    const formatValue = this.formatValue()
    const { poiaddress } = formatValue || {}
    return (
      <View className={clsPrefix}>
        <Text className={`${clsPrefix}-poiaddress`} onClick={this.handleVisible}>{poiaddress}</Text>
        <AtFloatLayout isOpened={visible} title={`请选择${label}`} onClose={this.onClose}>
          {renderSelectMap}
        </AtFloatLayout>
      </View>
    )
  }
}

