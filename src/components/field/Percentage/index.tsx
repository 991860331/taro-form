import Taro from '@tarojs/taro'
import NumberInput from '../NumberInput'

const formatter = value => {
  if (!value) return null
  return `${value}%`
}

const parser = value => value.replace('%', '')

export default (props) => (
  <NumberInput 
    {...props}
    formatter={formatter}
    parser={parser}
  />
)