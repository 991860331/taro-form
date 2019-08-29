

interface ICpForm {
  fields: Array;
  colon?: boolean;
  layout?: 'horizontal'| 'vertical';
  hideRequiredMark: boolean;
  // [otherProps: string]: any;
}

export {
  ICpForm,
}