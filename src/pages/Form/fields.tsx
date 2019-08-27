export const fields = [
	{
		fieldCode: 'realName',
		label: "真实姓名",
		rules: [
			{
				required: true,
				message: "真实姓名不能为空",
			}, {
				max: 4,
				message: "真实姓名长度不能超过 4 位",
			}, 
			{
				whitespace: true,
				message: "昵称不能有空格",
			}, 
		],
		child: {
      type: 'TEXT',
      placeholder: '请输入您的真实姓名',
		}
	}, {
		fieldCode: 'age',
		label: "年龄",
		child: {
			type: 'INT',
			placeholder: '请输入您的年龄',
		},
		rules: [
			{
				max: 150,
				message: "最大年纪为 150",
			}, {
				min: 1,
				message: "最小年纪为 1",
			}, {
				type: 'integer',
				message: '年龄必须为整数'
			}
		]
	}, {
		fieldCode: 'gender',
		label: "性别",
		child: {
			type: 'BOOLEAN',
			options: [
				{
					title: '男',
					value: 1,
				}, {
					title: '女',
					value: 0,
				}
			]
		},
		
	}, {
		fieldCode: 'textarea',
		label: "反馈",
		child: {
			type: 'TEXTAREA',
			placeholder: '你的问题是...',
		},
		rules: [
			{
				required: true,
				message: "反馈内容必填",
			}, 
		]
	}, {
		fieldCode: 'double',
		label: "浮点数",
		child: {
			type: 'DOUBLE',
			placeholder: '输入浮点数',
		},
		rules: [
			
		]
	},
]