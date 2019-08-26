// 必填校验
const validateRequired = value => {
  if (value === undefined || value === null || value === "") {
    return true;
  }
};
// string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度
const validateLen = (value, rule) => {
  const { len } = rule;
  if (typeof len !== 'number') return;
  if (typeof value === 'string' || Array.isArray(value)) {
    if (value.length !== len) return true;
  }
  if (typeof value === 'number' && value !== len) {
    return true;
  }
};
// string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度
const validateMax = (value, rule) => {
  const { max } = rule;
  if (typeof max !== 'number') return;
  if (typeof value === 'string' || Array.isArray(value)) {
    if (value.length > max) return true;
  }
  if (typeof value === 'number' && value > max) {
    return true;
  }
};
// string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度
const validateMin = (value, rule) => {
  const { min } = rule;
  if (typeof min !== 'number') return;
  if (typeof value === 'string' || Array.isArray(value)) {
    if (value.length < min) return true;
  }
  if (typeof value === 'number' && value < min) {
    return true;
  }
};
// 是否匹配枚举中的值
const validateEnums = (value, rule) => {
  const { enums } = rule;
  if (!Array.isArray(enums)) return;
  if (!enums.includes(value)) {
    return true;
  }
};
// 如果字段仅包含空格则校验不通过
const validateWhitespace = (value, rule) => {
  const { whitespace } = rule;
  if (typeof whitespace !== 'boolean') return;
  if (whitespace && typeof value === 'string' && value.includes(" ")) {
    return true;
  }
};
// 正则表达式匹配
const validatePattern = (value, rule) => {
  const { pattern } = rule;
  if (typeof value !== 'string') return;
  if (typeof pattern === 'string') {
    const patternRegExp = new RegExp(pattern);
    const isMatch = patternRegExp.test(value);
    return !isMatch;
  }
  if (pattern instanceof RegExp) {
    const isMatch = pattern.test(value);
    return !isMatch;
  }
};
// 类型
const types = ['string', 'number', 'boolean', 'method', 'integer', 'array', 'object', 'float'];
const validateType = (value, rule) => {
  const { type } = rule;
  if (value === undefined) return;
  if (!types.includes(type)) return;
  if (type === 'string' || type === 'number' || type === 'boolean' || type === 'array' || type === 'object') {
    return typeof value !== type;
  }
  if (type === 'method') {
    return typeof value !== 'function';
  }
  if (type === 'integer' && typeof value === 'number') {
    return value % 1 !== 0;
  }
  if (type === 'float' && typeof value === 'number') {
    return value !== parseInt(`${value}`);
  }
};
const validateFunctionMap = {
  len: validateLen,
  max: validateMax,
  min: validateMin,
  type: validateType,
  enums: validateEnums,
  pattern: validatePattern,
  required: validateRequired,
  whitespace: validateWhitespace
};
export const getValidateFunction = rule => {
  if (!rule || typeof rule !== 'object') return;
  const validateTypes = Object.keys(rule).filter(ruleType => {
    const isNotMessage = ruleType !== 'message';
    const isAvailableRuleType = ruleType in validateFunctionMap;
    return isNotMessage && isAvailableRuleType;
  });
  if (validateTypes.length > 0) {
    const validateType = validateTypes[0];
    return validateFunctionMap[validateType];
  }
};