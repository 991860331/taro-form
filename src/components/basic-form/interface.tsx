

interface IBasicForm {
  fields: Array<IFormItem>;
  colon?: boolean;
  layout?: 'horizontal'|'vertical';
  initialValues?: object;
  onFieldsChange?: Function;
  hideRequiredMark?: boolean;
  // [otherProps: string]: any;
}

interface IFormItem {
  renderLabel: any;
  colon?: boolean;
  border?: boolean;
  required?: boolean;
  // [otherProps: string]: any;
}




interface IFormItemWrapper {
  children: any;
  border?: boolean;
  // [otherProps: string]: any;
}

interface IFormItemLabel {
  children: any;
  colon?: boolean;
  layout?: 'horizontal'|'vertical';
  required?: boolean;
  // [otherProps: string]: any;
}



export {
  IBasicForm,
  IFormItem,
  IFormItemLabel,
  IFormItemWrapper,
}