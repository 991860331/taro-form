import Taro from '@tarojs/taro'
import { View, Block, Text } from '@tarojs/components'
import { AtInput, AtForm, AtButton } from 'taro-ui'
import CpForm from '@/components/cp-form'
import fields from '../formData/fields'
import './index.scss'

export default class Index extends Taro.PureComponent {

	static options = {
		styleIsolation: 'shared'
	}

	state = {
		layout: 'horizontal',   // vertical   horizontal
	}

	componentDidMount() {
		
	}

	onFieldsChange = (name, values) => {
		
	}

	submit = () => {
    console.log(this.formInstance.current)
		// this.formInstance.submit()
		// 	.then(res => {
		// 		console.log('submitdata', res)
		// 	})
		// 	.catch(err => {
		// 		console.log('submiterr', err)
		// 	})
	}

	reset = () => {
		// this.formInstance.resetFields()
	}

	toggleLayout = () => {
		const { layout } = this.state
		this.setState({
			layout: layout === 'horizontal' ? 'vertical': 'horizontal'
		})
	}

	formInstance = Taro.createRef()

	render() {
		const { layout } = this.state
		return (
			<View className="wrapper">
				<View className="buttons">
					<AtButton type='primary' onClick={this.toggleLayout}>{layout} 布局</AtButton>
				</View>
				<View className="form">
					<CpForm
						colon={true}
						hideRequiredMark={false}
						ref={this.formInstance}
						layout={layout}  //vertical   horizontal
						fields={fields}
						initialValues={{
							
						}}
						onFieldsChange={this.onFieldsChange}
					/>
				</View>
				<View className="buttons">
					<AtButton onClick={this.reset}>reset</AtButton>
					<AtButton type='primary' onClick={this.submit}>submit</AtButton>
				</View>
			</View>
		)
	}
}





