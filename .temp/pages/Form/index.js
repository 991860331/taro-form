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
    this.formInstance = null;
  }
  componentDidMount() {}
  render() {
    return <View className="wrapper">
				<CpForm colon hideRequiredMark={false} ref={instance => this.formInstance = instance} layout="vertical" fields={fields} initialValues={{
        realName: "石松岩",
        age: 18,
        height: 177.50,
        gender: true
      }} onFieldsChange={this.onFieldsChange} />
				<View className="buttons">
					<AtButton type="primary" onClick={this.submit}>submit</AtButton>
					<AtButton onClick={this.reset}>reset</AtButton>
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