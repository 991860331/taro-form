import Taro from '@tarojs/taro'
import { AtInput } from 'taro-ui'


// type=number 类型弹出的数字键盘无法输入 - ，所以使用 type=text
export default (props) => {
  const { name, value, onChange, formatter, parser,  ...otherProps } = props
  const isFormatter = typeof formatter === 'function'
  const formatedValue = isFormatter ? formatter(value): value
  return (
    <AtInput 
      name={name}
      type='text'
      {...otherProps}
      value={formatedValue}
      border={false}
      onChange={value => {
        if (typeof parser === 'function') {
          const parseredValue = parser(value)
          onChange(parseredValue)
          return 
        }
        onChange(value)
      }}
    />
  )
}