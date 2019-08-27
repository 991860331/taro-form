import Taro from '@tarojs/taro'
import NumberInput from '../NumberInput'

const formatter = value => {
  if (!value) return null
  return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const parser = value => value.replace(/\$\s?|(,*)/g, '')

export default (props) => (
  <NumberInput 
    {...props}
    formatter={formatter}
    parser={parser}
  />
)