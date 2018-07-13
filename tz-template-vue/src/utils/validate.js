// const REG_PHONE_I18N = /^((?!86-)\d+-\d{6,}|(86-)?1\d{10})$/;
const REG_EMAIL = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const REG_ID_NUMBER = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
const REG_QQ = /[1-9][0-9]{4,14}/;
// const REG_WECHAT = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
const REG_WECHAT_EXTEND = /^[a-zA-Z1-9]{1}[-_a-zA-Z0-9]{5,19}$/;
const REG_POSITIVE_INTEGER = /^[1-9]{1}\d*$/;

export function validateRangeNumber(rule, value, callback) {
  const num = Number(value);
  if ('min' in rule && 'max' in rule) {
    if (num < rule.min || num > rule.max) {
      return callback(
        new Error(`请输入 ${rule.min} - ${rule.max} 范围内的数值`)
      );
    }
  } else if ('min' in rule && num < rule.min) {
    return callback(new Error(`请输入大于 ${rule.min} 的数值`));
  } else if ('max' in rule && num > rule.max) {
    return callback(new Error(`请输入小于 ${rule.max} 的数值`));
  }
  return callback();
}

export function validateEmail(rule, value, callback) {
  if (value && !REG_EMAIL.test(value)) {
    return callback(new Error('请输入正确的邮箱地址'));
  }
  return callback();
}

export function validateIDNumber(rule, value, callback) {
  if (value && !REG_ID_NUMBER.test(value)) {
    return callback(new Error('请输入正确的身份证号'));
  }
  return callback();
}

export function validatePositiveInteger(rule, value, callback) {
  if (value && !REG_POSITIVE_INTEGER.test(value)) {
    return callback(new Error('请输入正确的正整数值'));
  }
  return callback();
}

export function validateQQ(rule, value, callback) {
  if (value && !REG_QQ.test(value)) {
    return callback(new Error('请输入正确的 QQ 号码'));
  }
  return callback();
}

export function validateWechatExtend(rule, value, callback) {
  if (value && !REG_WECHAT_EXTEND.test(value)) {
    return callback(new Error('请输入正确的微信号码'));
  }
  return callback();
}
