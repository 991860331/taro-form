import Taro from '@tarojs/taro'
import { View, Block, Text } from '@tarojs/components'
import { AtInput, AtForm, AtButton } from 'taro-ui'
import CpForm from '@/components/form'
import { fields } from './fields'
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

	toggleLayout = () => {
		const { layout } = this.state
		this.setState({
			layout: layout === 'horizontal' ? 'vertical': 'horizontal'
		})
	}

	formInstance = null

	render() {
		const { layout } = this.state
		return (
			<View className="wrapper">
				<View className="buttons">
					<AtButton type='primary' onClick={this.toggleLayout}>{layout} 布局</AtButton>
				</View>
				<CpForm
					colon={false}
					hideRequiredMark={false}
					ref={instance => this.formInstance=instance}
					layout={layout}  //vertical   horizontal
					fields={fields}
					initialValues={{
						
					}}
					onFieldsChange={this.onFieldsChange}
				/>
				<View className="buttons">
					<AtButton onClick={this.reset}>reset</AtButton>
					<AtButton type='primary' onClick={this.submit}>submit</AtButton>
				</View>
			</View>
		)
	}
}





