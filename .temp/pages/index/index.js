import Nerv from "nervjs";
import * as tslib_1 from "tslib";
import { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
import { AtButton, AtActionSheet, AtActionSheetItem } from 'taro-ui';
import { add, minus, asyncAdd } from '../../actions/counter';
import './index.less';
let Index = class Index extends Component {
  constructor() {
    super(...arguments);
    /**
    * 指定config的类型声明为: Taro.Config
    *
    * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
    * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
    * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
    */

    this.state = {
      visible: true
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    const { visible } = this.state;
    return <View className="index">
        <AtButton type="primary" onClick={this.open}>open</AtButton>
        
        <AtActionSheet isOpened={visible}>
          <AtActionSheetItem>
            取消 确认
          </AtActionSheetItem>
          <AtActionSheetItem>
            <View style={{ height: '200px', overflow: 'auto' }}>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
              <View>123</View>
            </View>
          </AtActionSheetItem>
        </AtActionSheet>
      </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };
  open = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

};
Index = tslib_1.__decorate([connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
}))], Index);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
export default Index;