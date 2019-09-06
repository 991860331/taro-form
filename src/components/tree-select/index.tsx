import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import cls from 'classnames'
import Tree from './Tree'
import { ITree } from './utils'
import './style.scss'

const clsPrefix = 'cp-tree-wrapper'

export default class TreeSelect extends Taro.PureComponent<ITree> {

  static defaultProps = {
    multiple: false,
    treeDefaultExpandAll: true,
  }

  static options = {
    styleIsolation: 'shared'
  }
  
  state = {
    
  }

  render() {
    const { dataSource, multiple, value, onChange, treeDefaultExpandAll, loadData } = this.props
    if (!Array.isArray(dataSource)) return null
    return (
      <View className={cls(clsPrefix, {
        [`${clsPrefix}-radio`]: !multiple,
        [`${clsPrefix}-multiple`]: multiple,
      })}>
        <Tree
          root 
          value={value}
          loadData={loadData}
          multiple={multiple}
          onChange={onChange}
          dataSource={dataSource} 
          treeDefaultExpandAll={treeDefaultExpandAll}
        />
      </View>
    )
  }
}