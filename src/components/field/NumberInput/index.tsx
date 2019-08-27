import Taro from '@tarojs/taro'
import { AtInput } from 'taro-ui'


// type=number 类型弹出的数字键盘无法输入 - ，所以使用 type=text
export default (props) => {
  const { name, onChange, ...otherProps } = props
  return (
    <AtInput 
      name={name}
      type='text'
      {...otherProps}
      onChange={value => {
        if (typeof value === 'number') {
          onChange(value)
          return 
        }
        if (!value || value.includes(" ")) {
          onChange(null)
          return 
        }
        if (value === "-") {
          onChange(value)
          return 
        }
        onChange(Number(value))
      }}
    />
  )
}