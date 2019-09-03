



interface Ifield {
  fieldCode: string;
  label: string;
  child: Ichild;
  rules?: Array;
  help?: string;
  clear?: boolean;
  isFullRow?: boolean;
  isAlwaysVertical?: boolean;
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









// --------------------------




interface ICpForm {
  fields: Array<Ifield>;
  colon: boolean;
  layout: 'horizontal'|'vertical';
  border?: boolean;
  initialValues?: object;
  onFieldsChange?: Function;
  hideRequiredMark?: boolean;
}

interface IFormItem {
  field: Ifield;
  value: any;
  colon: boolean;
  errors: string[];
  layout: 'horizontal'|'vertical';
  help?: string;
  border?: boolean;
  onChange: Function;
  hideRequiredMark?: boolean;
}

interface IFormItemWrapper {
  value: any;
  clear?: boolean;
  border?: boolean;
  errors: string[];
  onClear: Function;
  isFullRow?: boolean;
  renderIcon?: any;
}


interface IFormItemLabel {
  rules: Array;
  colon: boolean;
  isHorizontal: boolean;
  help?: string;
  hideRequiredMark?: boolean;
}

export {
  Irule,
  Ichild,
  ICpForm,
  IFormItem,
  IFormItemLabel,
  IFormItemWrapper,
}