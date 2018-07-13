'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"test"',
  BASE_API: '"/api"',
  STUDY_API: '"https://www-test.shiguangkey.com/api"', // 学习平台
  AUTH_HOST: '"https://login-test.shiguangkey.com"', // 权限系统
  AUTH_API: '"https://login-test.shiguangkey.com/api/power"',
});
