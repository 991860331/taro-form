import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import cls from 'classnames'
import TreeItem from './TreeItem'
import { ITree } from './utils'


export default class Tree extends Taro.PureComponent<ITree> {

  static options = {
    styleIsolation: 'shared'
  }
  
  state = {

  }

  render() {
    const { dataSource, root, value: selectedValue, onChange, multiple, loadData, treeDefaultExpandAll } = this.props
    if (!Array.isArray(dataSource)) return null
    return (
      <View className={cls("tree", {
        "tree-root": root
      })}>
        {dataSource.map(item => {
          const { value } = item
          return (
            <TreeItem 
              key={value}
              data={item}
              loadData={loadData}
              onChange={onChange}
              multiple={multiple}
              selectedValue={selectedValue}
              treeDefaultExpandAll={treeDefaultExpandAll}
            />
          )
        })}
      </View>
    )
  }
}