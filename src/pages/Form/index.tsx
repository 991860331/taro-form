import Taro from '@tarojs/taro'
import { View, Block, Text } from '@tarojs/components'
import { AtInput, AtForm, AtButton } from 'taro-ui'
import CpForm from '@/components/form'
import { fields } from './fields'
import './index.scss'


export default class Index extends Taro.PureComponent {

	componentDidMount() {
		
	}

	onFieldsChange = (name, values) => {
		
	}

	submit = () => {
		this.formInstance.submit()
			.then(res => {
				console.log('submitdata', res)
			})
			.catch(err => {
				console.log('submiterr', err)
			})
	}

	reset = () => {
		this.formInstance.resetFields()
	}

	formInstance = null

	render() {
		return (
			<View className="wrapper">
				<CpForm
					colon
					hideRequiredMark={false}
					ref={instance => this.formInstance=instance}
					layout="vertical"
					fields={fields}
					initialValues={{
						realName: "石松岩",
						age: 18

					}}
					onFieldsChange={this.onFieldsChange}
				/>
				<View className="buttons">
					<AtButton type='primary' onClick={this.submit}>submit</AtButton>
					<AtButton onClick={this.reset}>reset</AtButton>
				</View>
			</View>
		)
	}
}





