'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK: process.env.MOCK,
  BASE_API: `'${
    process.env.MOCK
      ? 'http://127.0.0.1:9999'
      : 'https://crm-dev.shiguangkey.com'
  }/api'`,
  STUDY_API: '"https://www-dev.shiguangkey.com/api"', // 学习平台
  AUTH_HOST: '"https://login-dev.shiguangkey.com"', // 权限系统
  AUTH_API: `'${
    process.env.MOCK
      ? 'http://127.0.0.1:9999'
      : 'https://login-dev.shiguangkey.com'
  }/api/power'`,
});
