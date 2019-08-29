



interface IFormItem {
  label: string;
  [otherProps: string]: any;
}

interface IForm {
  fields: Array<IFormItem>;
  colon?: boolean;
  layout?: 'horizontal'|'vertical';
  initialValues?: object;
  onFieldsChange?: Function;
  hideRequiredMark?: boolean;
  [otherProps: string]: any;
}








export {
  IForm,
  IFormItem,
}