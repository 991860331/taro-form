import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCheckbox, AtIcon } from 'taro-ui'
import cls from 'classnames'
import { ITreeItem } from './utils'
import Tree from './Tree'

export default class TreeItem extends Taro.PureComponent<ITreeItem> {

  static options = {
    styleIsolation: 'shared'
  }

  constructor(props) {
    super(props)
    const { treeDefaultExpandAll, data={} } = props
    const { children } = data
    const hasChild = Array.isArray(children) && children.length > 0
    this.state = {
      visible: treeDefaultExpandAll && hasChild,
      loading: false,
    }
  }

  loaded = false

  handleToggleMore = async () => {
    const { data, loadData } = this.props
    const { visible } = this.state
    const { children } = data
    const hasChild = Array.isArray(children) && children.length > 0
    if (hasChild || this.loaded) {
      this.setState({
        visible: !visible,
      })
      return 
    } 
    if (typeof loadData === 'function') {
      this.setState({loading: true})
      await loadData(data)
      this.setState({loading: false})
      this.setState({
        visible: true,
      }, () => {
        this.loaded = true
      })
    }
  }

  handleTreeRadioChange = (value, disabled) => {
    if (disabled) return 
    const { onChange } = this.props
    onChange(value)
  }

  render() {
    const { visible, loading } = this.state
    const { selectedValue, onChange, multiple, data, treeDefaultExpandAll, loadData } = this.props
    const { label, children, value, isLeaf, disabled } = data || {}
    const moreIcon = loading ? 'loading-3': visible ? 'chevron-down': 'chevron-up'
    const isRenderLeafIcon = isLeaf || (Array.isArray(children) && children.length > 0)
    const isChecked = selectedValue === value
    return (
      <View key={value}>
        <View className="tree-item-content">
          {/* 多选树 */}
          {multiple&&(
            <AtCheckbox 
              options={[{
                label,
                value,
                disabled,
              }]}
              onChange={onChange}
              selectedList={selectedValue}
            />)}
          {/* 单选树 */}
          {!multiple&&(
            <View 
              onClick={() => this.handleTreeRadioChange(value, disabled)} 
              className="tree-item-label"
            >
              <Text className={cls({
                  "tree-radio-checked": isChecked,
                  "tree-radio-disabled": disabled,
                })}
              >
                {label}
              </Text>
              {isChecked&&(
                <AtIcon value='check' size='18' color='#1890FF'></AtIcon>
              )}
            </View>)}
          {/* 展开收起加载中状态下的图标 */}
          {isRenderLeafIcon&&(
            <View className="tree-item-more" onClick={this.handleToggleMore}>
              <AtIcon value={moreIcon} size='20' color="#C7C7CC" />
            </View>)}
        </View>
        {/* 子级树 */}
        <View className={cls("tree-item-children",{
          "tree-item-children-visible": visible,
        })}>
          <Tree 
            value={selectedValue}
            multiple={multiple}
            onChange={onChange}
            loadData={loadData}
            dataSource={children} 
            treeDefaultExpandAll={treeDefaultExpandAll}
          />
        </View>
      </View>
    )
  }
}