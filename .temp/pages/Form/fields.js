export const fields = [{
  fieldCode: 'realName',
  label: "真实姓名",
  rules: [{
    required: true,
    message: "真实姓名不能为空"
  }, {
    max: 4,
    message: "真实姓名长度不能超过 4 位"
  }, {
    whitespace: true,
    message: "昵称不能有空格"
  }],
  child: {
    type: 'TEXT',
    placeholder: '请输入您的真实姓名'
  }
}, {
  fieldCode: 'age',
  label: "年龄",
  child: {
    type: 'INT',
    placeholder: '请输入您的年龄'
  },
  rules: [{
    max: 150,
    message: "最大年纪为 150"
  }, {
    min: 1,
    message: "最小年纪为 1"
  }, {
    type: 'integer',
    message: '年龄必须为整数'
  }, {
    required: false,
    message: '年龄必填'
  }]
}, {
  fieldCode: 'gender',
  label: "性别",
  child: {
    type: 'BOOLEAN',
    options: [{
      title: '男',
      value: true
    }, {
      title: '女',
      value: false
    }]
  }
}, {
  fieldCode: 'height',
  label: "身高 cm",
  child: {
    type: 'DOUBLE',
    placeholder: '输入身高'
  },
  rules: [{
    min: 0,
    message: '请朝着天空的方向生长'
  }, {
    max: 250,
    message: '你比姚明都高了'
  }, {
    precision: 2,
    message: '精确两位即可'
  }]
}, {
  fieldCode: 'currency',
  label: "存款",
  child: {
    type: 'CURRENCY',
    placeholder: '输入存款余额'
  },
  rules: [{
    required: true,
    message: '必填'
  }, {
    precision: 2,
    message: '精确两位即可'
  }]
}, {
  fieldCode: 'percentage',
  label: "开发进度",
  child: {
    type: 'PERCENTAGE',
    placeholder: '输入开发进度'
  },
  rules: [{
    required: true,
    message: '必填'
  }, {
    precision: 2,
    message: '精确两位即可'
  }, {
    min: 0,
    message: '在代码里下毒'
  }, {
    max: 100,
    message: '超额有风险'
  }]
}, {
  fieldCode: 'date',
  label: "出生日期",
  child: {
    type: 'DATE',
    placeholder: '请选择出生日期'
  },
  rules: [{
    required: true,
    message: '出生日期必填'
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
}];