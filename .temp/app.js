import '@tarojs/async-await';
import Taro, { Component } from "@tarojs/taro-h5";
import { Provider } from "@tarojs/redux-h5";

import configStore from "./store/index";
import './app.scss';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import Nerv from "nervjs";
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis(_taroHistory);
const store = configStore();
class App extends Component {
  state = {
    __tabs: {
      list: [{
        text: '首页',
        pagePath: "/pages/index/index"
      }, {
        text: 'Form',
        pagePath: "/pages/Form/index"
      }],
      color: '#b44c4c',
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                  
                  <TabbarContainer>

                    <TabbarPanel>
                      
              <Router history={_taroHistory} routes={[{
            path: '/pages/index/index',
            componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
            isIndex: true
          }, {
            path: '/pages/Form/index',
            componentLoader: () => import( /* webpackChunkName: "Form_index" */'./pages/Form/index'),
            isIndex: false
          }]} customRoutes={{}} />
              
                    </TabbarPanel>

                    <Tabbar conf={this.state.__tabs} homePage="pages/index/index" router={Taro} />

                  </TabbarContainer>
                </Provider>;
  }
  config = {
    pages: ["/pages/index/index", "/pages/Form/index"],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#ff0000',
      navigationBarTitleText: 'micro-git',
      navigationBarTextStyle: 'white'
    },
    tabBar: { list: [{ text: '首页', pagePath: "/pages/index/index" }, { text: 'Form', pagePath: "/pages/Form/index" }], color: '#b44c4c', mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));