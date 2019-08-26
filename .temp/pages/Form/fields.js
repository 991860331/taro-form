export const fields = [{
  fieldCode: 'name',
  label: "昵称",
  rules: [{
    required: true,
    message: "昵称不能为空"
  }, {
    len: 5,
    message: "昵称长度应该为5"
  }, {
    whitespace: true,
    message: "昵称不能有空格"
  }, {
    max: 10,
    message: "max 10"
  }, {
    min: 4,
    message: "min 4"
  }],
  child: {
    type: 'TEXT',
    placeholder: '请输入您的昵称'
  }
}, {
  fieldCode: 'age',
  label: "多行文本",
  child: {
    type: 'TEXTAREA',
    placeholder: '你的问题是...'
  },
  rules: [{
    type: 'string',
    message: "文本"
  }]
}];