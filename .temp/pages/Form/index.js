import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import CpForm from "../../components/form/index";
import { fields } from './fields';
import './index.scss';
export default class Index extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      layout: 'horizontal'
    };
    this.onFieldsChange = (name, values) => {};
    this.submit = () => {
      this.formInstance.submit().then(res => {
        console.log('submitdata', res);
      }).catch(err => {
        console.log('submiterr', err);
      });
    };
    this.reset = () => {
      this.formInstance.resetFields();
    };
    this.toggleLayout = () => {
      const { layout } = this.state;
      this.setState({
        layout: layout === 'horizontal' ? 'vertical' : 'horizontal'
      });
    };
    this.formInstance = null;
  }
  componentDidMount() {}
  render() {
    const { layout } = this.state;
    return <View className="wrapper">
				<View className="buttons">
					<AtButton type="primary" onClick={this.toggleLayout}>{layout} 布局</AtButton>
				</View>
				<CpForm colon={false} hideRequiredMark={false} ref={instance => this.formInstance = instance} layout={layout} //vertical   horizontal
      fields={fields} initialValues={{}} onFieldsChange={this.onFieldsChange} />
				<View className="buttons">
					<AtButton onClick={this.reset}>reset</AtButton>
					<AtButton type="primary" onClick={this.submit}>submit</AtButton>
				</View>
			</View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
Index.options = {
  styleIsolation: 'shared'
};