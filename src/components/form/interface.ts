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
  error: string[];
  onChange: Function;
  colon: boolean;
  layout: 'horizontal'|'vertical';
  hideRequiredMark?: boolean;
}

interface Ifield {
  fieldCode: string;
  label: string;
  child: Ichild;
  rules?: Array;
}

interface IFormItemLabel {
  rules: Array;
  colon: boolean;
  layout: 'horizontal'|'vertical';
  isError: boolean;
  hideRequiredMark?: boolean;
}

interface IFormItemError {
  data: string[],
}

interface Ichild {
  type: string;
  [otherProps: string]: any;
}

interface Irule {
  len?: number;
  max?: number;
  min?: number;
  enums?: any[];
  type?: string;
  message: string;
  pattern?: RegExp;
  required?: boolean;
  whitespace?: boolean;
  [otherProps: string]: any;
}

export {
  Irule,
  Ichild,
  ICpForm,
  IFormItem,
  IFormItemLabel,
  IFormItemError,
}