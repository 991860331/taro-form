
# 记录一下在使用 taro 的过程中遇到的问题

问题大多是在小程序端的，h5 中也存在

## taro

- 不支持动态渲染

例如

```js
  const Icon = error ? <Icon type="error" />: <Icon type="right" />
```

```js
  const fieldMap = {
    TEXT(props) {
      return <View>text</View>
    }
  }
  const field = fieldMap.TEXT
```

- 当一个文件内定义了多个组件，会渲染异常

例如

```js
// index.tsx
import FormItem from './FormItem'

class Form extends Taro.PureComponent {
  static Item = FormItem   // 类组件的静态属性是一个组件
  ....
  render() {
    return (
      <View>表单</View>
    )
  }
}

export default Form
```

```js
// index.tsx
import FormItem from './FormItem'

class Form extends Taro.PureComponent {  
  render() {
    return (
      <View>表单</View>
    )
  }
}
// 一个文件导出多个组件
export default Form
export {
  FormItem as Item
}
```

- this.props 中不能使用扩展运算符

例如

```js
  render() {
    const {name, ...otherProps} = this.props  
    return (
      <View {...otherProps}>{name}</View>
    )
  }
```

- Context 的变化在小程序中不会触发 PuerComponent 组件的更新，在 web 端可以触发更新

- Context 在 web 端有 bug,比如在父组件中更新 state ,那么子组件中的 Context 会...变异

- 通过 render 前缀的属性传递的必须是 jsx,如果需要多层传递，则每层都需要 jsx 嵌套

- render 前缀的属性在函数式组件中无法渲染，需要在类组件中渲染

- jsx 定义之后就无法在操作，无法 clone 遍历， shit !!!

- 传递父组件的实例给子组件会导致内存溢出，组件奔溃，但是以函数的方式以返回值的传递实例就不会报错

- 一个文件导出了一个组件后，就不能再导出其他变量、方法等

## taro-ui

- AtInput 组件在 type=number 类型时，返回值为 string
- AtInputNumber，返回值为 string

需要做转化
