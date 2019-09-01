import Taro from '@tarojs/taro'
import DisplayText from '../DisplayText'


interface IFormula {
  value: string;
  [otherProps: string]: any;
}
export default class Formula extends Taro.PureComponent<IFormula> {

  static defaultProps = {
    child: {},
  }

  formate = () => {
    const { value, child: {formulaResultType} } = this.props
    if (formulaResultType === 'URL') {

    }
    if (formulaResultType === 'DATE') {

    }
    if (formulaResultType === 'BOOLEAN') {
      return `${value}`
    }
    if (formulaResultType === 'TIMESTAMP') {

    }
    return value
  }

  render() {
    const formatedValue = this.formate()
    return (
      <DisplayText value={formatedValue} />
    )
  }
}

