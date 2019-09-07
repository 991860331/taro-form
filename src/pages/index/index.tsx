import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton, AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'
import TreeSelect from '../../components/tree-select'
import './index.less'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

const data = [
  {
    label: "蔬菜",
    value: '001',
    disabled: true,
    children: [
      {
        label: "萝卜",
        value: '002',
      }, {
        label: "白菜",
        value: '003',
      }
    ]
  }, {
    label: "水果",
    value: '004',
    children: [
      {
        label: "苹果",
        value: '005',
        isLeaf: true
      }, {
        label: "橘子",
        value: '006',
      }
    ]
  }

]






export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    data: [],
    visible: true,
    selectedList: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data,
      })
    }, 2000)
  }

  onChange = (selectedList) => {
    console.log(selectedList, 'selectedList')
    this.setState({
      selectedList,
    })
  }

  onTreeLoadData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  render () {
    const { visible, selectedList, data } = this.state
    return (
      <View className='index'>
        <TreeSelect 
          multiple={false}
          treeDefaultExpandAll
          loadData={this.onTreeLoadData}
          onChange={this.onChange}
          value={selectedList}
          dataSource={data}
        />
      </View>
    )
  }
}

