interface ICpForm {
  colon: boolean;
  layout: 'horizontal'|'vertical';
  fields: Array;
  initialValues?: object;
  onFieldsChange?: Function;
  hideRequiredMark?: boolean;
}

interface IFormItem {
  field: Ifield;
  value: any;
  onChange: Function;
}

interface Ifield {
  fieldCode: string;
  label: string;
  child: Ichild;
  rules?: Array;
}

interface IFormItemLabel {
  rules: Array;
  
}

interface Ichild {
  type: string;
  [otherProps: string]: any;
}

export {
  Ichild,
  ICpForm,
  IFormItem,
  IFormItemLabel,
}