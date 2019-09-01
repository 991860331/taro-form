import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cls from 'classnames'
import { AtImagePicker } from 'taro-ui'

// 单图片字段只能选择上传一张图片
const COUNT = 1
// 图片大小，每行可以展示的数量
const ROW_LENGTH = 2
const clsPrefix = 'image-single'

interface IImageSingle {
  value: [];
  [otherProps: string]: any;
}
export default class ImageSingle extends Taro.PureComponent<IImageSingle> {

  static options = {
    styleIsolation: 'shared',
  }

  static defaultProps = {
    child: {},
  }

  onChange = (files, type) => {
    const { onChange } = this.props
    console.log(files, 'files')
    onChange(files)
  }

  render() {
    const { value } = this.props
    const formatedValue = Array.isArray(value) ? value: []
    const isChoosed: boolean = formatedValue.length === 1
    return (
      <View className={cls({
        [clsPrefix]: isChoosed
      })}>
        <AtImagePicker
          files={formatedValue}
          count={COUNT}
          length={ROW_LENGTH}
          multiple={false}
          onChange={this.onChange}
        />
      </View>
    )
  }
}

