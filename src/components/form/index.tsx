import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import FormItem from './FormItem'
import { ICpForm } from './interface'
import Context from './Context'
import './style/index.scss'


class CpForm extends Taro.PureComponent<ICpForm> {

	static defaultProps = {
		colon: true,
		layout: 'horizontal',
		fields: [],
		hideRequiredMark: false,
	}

	state = {
		data: {
			
		}
	}

	componentDidMount() {
		this.setInitialValues()
	}

	setInitialValues() {
		const { initialValues } = this.props
		this.setFieldsValue(initialValues)
	}

	onChange = (fieldName: string, value: any) => {
		const { data } = this.state
		const { onFieldsChange } = this.props
		console.log("onChange:", fieldName,":", value)

		this.setState({
			data: {
				...data,
				[fieldName]: value
			}
		}, () => {
			if (typeof onFieldsChange === 'function') {
				const { data } = this.state
				onFieldsChange(fieldName, data)
			}
		})
	}

	resetFields = (fields?: string[]) => {
		if (Array.isArray(fields)) {
			const { data } = this.state
			fields.forEach(field => {
				delete data[field]
			})
			this.setState({
				data: {
					...data,
				}
			})
			return 
		}
		this.setState({
			data: {},
		})
	}

	setFieldsValue = (fieldsValue, callback?: Function) => {
		if (!fieldsValue || typeof fieldsValue !== 'object') return
		const { data } = this.state
		this.setState({
			data: {
				...data,
				...fieldsValue,
			}
		}, () => {
			if (typeof callback === 'function') {
				callback()
			}
		})
	}

	getFieldValue = (fieldName: string) => {
		const { data } = this.state
		return data[fieldName]
	}

	getFieldsValue = (fieldNames: string[]) => {
		if (Array.isArray(fieldNames)) {
			const fieldsValue = {}
			const { data } = this.state
			fieldNames.forEach(fieldName => {
				if (typeof fieldName === 'string') {
					fieldsValue[fieldName] = data[fieldName]
				}
			})
			return fieldsValue
		}
	}

	submit = () => {
		const { data } = this.state
		return data
	}

	render() {
		const { fields, layout, colon, hideRequiredMark } = this.props
		const { data } = this.state
		return (
			<Context.Provider
				value={{
					colon,
					layout,
					hideRequiredMark,
				}}
			>
				<View className="cp-form">
					{fields.map(field => {
						if (!field) return null
						const { fieldCode } = field
						const value = data[fieldCode]
						return (
							<FormItem 
								key={fieldCode} 
								field={field} 
								onChange={this.onChange}
								value={value}
							/>
						)
					})}
				</View>
			</Context.Provider>
		)
	}
}


export default CpForm

