export const fields = [{
  fieldCode: 'text',
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
  fieldCode: 'int',
  label: "年龄",
  child: {
    type: 'INT',
    placeholder: '请输入您的年龄'
  },
  rules: [{
    max: 35,
    message: "最大年纪为 35"
  }, {
    min: 18,
    message: "最小年纪为 18"
  }]
}, {
  fieldCode: 'textarea',
  label: "反馈",
  child: {
    type: 'TEXTAREA',
    placeholder: '你的问题是...'
  },
  rules: [{
    required: true,
    message: "反馈内容必填"
  }]
}, {
  fieldCode: 'double',
  label: "浮点数",
  child: {
    type: 'DOUBLE',
    placeholder: '输入浮点数'
  }
}];