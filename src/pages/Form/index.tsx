import Taro from '@tarojs/taro'
import { View, Block } from '@tarojs/components'
import { AtInput, AtForm, AtButton } from 'taro-ui'
import CpForm from '@/components/form'
import './index.scss'

const { Item } = CpForm

const fields = [
	{
		fieldCode: 'name',
		label: "名称",
		rules: [{
			required: true,
			message: "必填",
		}],
		child: {
			type: 'TEXT',
		}
	},{
		fieldCode: 'age',
		label: "多行文本",
		child: {
			type: 'TEXTAREA',
			placeholder: '你的问题是...',
		}
	},
]

export default class Index extends Taro.PureComponent {

	componentDidMount() {
		console.log("formInstance:", this.formInstance)
	}

	onFieldsChange = (name, values) => {
		console.log("onFieldsChange:", name, values)
	}

	submit = () => {
		this.formInstance.submit()
	}

	formInstance = null

	render() {
		return (
			<View>
				<CpForm
					colon={false}
					hideRequiredMark={false}
					ref={instance => this.formInstance=instance}
					layout="horizontal"
					fields={fields}
					initialValues={{
						name: 'shisongyan',
						age: "18"
					}}
					onFieldsChange={this.onFieldsChange}
				/>
				<AtButton type='primary' onClick={this.submit}>submit</AtButton>
			</View>
		)
	}
}