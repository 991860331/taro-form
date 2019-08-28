export const fields = [{
  fieldCode: 'TEXT',
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
  fieldCode: 'INT',
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
    required: true,
    message: '年龄必填'
  }]
}, {
  fieldCode: 'BOOLEAN',
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
  fieldCode: 'DOUBLE',
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
  fieldCode: 'CURRENCY',
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
  fieldCode: 'PERCENTAGE',
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
  fieldCode: 'DATE',
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
  fieldCode: 'TIMESTAMP',
  label: "上班时间",
  child: {
    type: 'TIMESTAMP',
    placeholder: '请选择上班时间'
  },
  rules: [{
    required: true,
    message: '上班时间必填'
  }]
}, {
  fieldCode: 'RADIO',
  label: "职位",
  child: {
    type: 'RADIO',
    placeholder: '请选择职位'
  },
  rules: [{
    required: true,
    message: '请选择职位'
  }]
}, {
  fieldCode: 'MULTISELECT',
  label: "爱好",
  child: {
    type: 'MULTISELECT',
    placeholder: '请选择爱好'
  },
  rules: [{
    required: true,
    message: '请选择爱好'
  }]
}, {
  fieldCode: 'RADIOTREE',
  label: "出生地址",
  child: {
    type: 'RADIOTREE',
    placeholder: '请选择出生地址'
  },
  rules: [{
    required: true,
    message: '请选择出生地址'
  }]
}, {
  fieldCode: 'MULTISELECTTREE',
  label: "工作过的城市",
  child: {
    type: 'MULTISELECTTREE',
    placeholder: '请选择工作过的城市'
  },
  rules: [{
    required: true,
    message: '请选择工作过的城市'
  }]
}, {
  fieldCode: 'URL',
  label: "个人主页",
  child: {
    type: 'URL'
  }
}, {
  fieldCode: 'EMAIL',
  label: "个人邮箱",
  child: {
    type: 'EMAIL'
  }
}, {
  fieldCode: 'TELPHONE',
  label: "固定电话",
  child: {
    type: 'TELPHONE'
  }
}, {
  fieldCode: 'TELPHONEI18N',
  label: "国际固定电话",
  child: {
    type: 'TELPHONEI18N'
  }
}, {
  fieldCode: 'CELLPHONE',
  label: "手机号码",
  child: {
    type: 'CELLPHONE'
  }
}, {
  fieldCode: 'CELLPHONEI18N',
  label: "国际手机号码",
  child: {
    type: 'CELLPHONEI18N'
  }
}, {
  fieldCode: 'ADDRESS',
  label: "地址",
  child: {
    type: 'ADDRESS'
  }
}, {
  fieldCode: 'ADDRESSI18N',
  label: "国际地址",
  child: {
    type: 'ADDRESSI18N'
  }
}, {
  fieldCode: 'AUTONUMBER',
  label: "自动编号",
  child: {
    type: 'AUTONUMBER'
  }
}, {
  fieldCode: 'FORMULA',
  label: "公式",
  child: {
    type: 'FORMULA'
  }
}, {
  fieldCode: 'ENCLOSURE',
  label: "附件",
  child: {
    type: 'ENCLOSURE'
  }
}, {
  fieldCode: 'IMAGE_SINGLE',
  label: "个人照片",
  child: {
    type: 'IMAGE_SINGLE'
  }
}, {
  fieldCode: 'RICHTEXT',
  label: "简历",
  child: {
    type: 'RICHTEXT'
  }
}, {
  fieldCode: 'MAP',
  label: "上班地点",
  child: {
    type: 'MAP'
  }
}, {
  fieldCode: 'IDRELATIONSHIP',
  label: "配偶",
  child: {
    type: 'IDRELATIONSHIP'
  }
}, {
  fieldCode: 'MULTITOONE',
  label: "投资公司",
  child: {
    type: 'MULTITOONE'
  }
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