import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import CpForm from "../../components/form/index";
import './index.scss';
const { Item } = CpForm;
const fields = [{
  fieldCode: 'name',
  label: "名称",
  rules: [{
    required: true,
    message: "必填"
  }],
  child: {
    type: 'TEXT'
  }
}, {
  fieldCode: 'age',
  label: "多行文本",
  child: {
    type: 'TEXTAREA',
    placeholder: '你的问题是...'
  }
}];
export default class Index extends Taro.PureComponent {
  constructor() {
    super(...arguments);
    this.onFieldsChange = (name, values) => {
      console.log("onFieldsChange:", name, values);
    };
    this.submit = () => {
      this.formInstance.submit();
    };
    this.formInstance = null;
  }
  componentDidMount() {
    console.log("formInstance:", this.formInstance);
  }
  render() {
    return <View>
				<CpForm colon={false} hideRequiredMark={false} ref={instance => this.formInstance = instance} layout="horizontal" fields={fields} initialValues={{
        name: 'shisongyan',
        age: "18"
      }} onFieldsChange={this.onFieldsChange} />
				<AtButton type="primary" onClick={this.submit}>submit</AtButton>
			</View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}