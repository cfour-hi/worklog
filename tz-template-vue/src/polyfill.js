import { removeUnhandleApi } from '@/utils/request';

/* eslint-disable no-extend-native */

/**
 * 配合接口层状态异常统处理（详情查看 src/utils/request.js）
 * Promise 的 then 方法会返回新的 Promise 实例
 * 如果 promise 先 then 再 catch
 * 则会导致下方覆写 catch 的方法内
 * this 指向 then 方法返回的 Promise 实例
 * 也就是说没有 apiUid 属性
 * @param {Function} onFulfilled
 * @param {Function} onRejected
 */
const promiseThen = Promise.prototype.then;
Promise.prototype.then = function(onFulfilled, onRejected) {
  const p = promiseThen.call(this, onFulfilled, onRejected);
  if (this.apiUid) p.apiUid = this.apiUid;
  return p;
};

/**
 * 配合接口层状态异常统处理（详情查看 src/utils/request.js）
 * @param {Function} onRejected
 */
Promise.prototype.catch = function(onRejected) {
  function $onRejected(...args) {
    const catchResult = onRejected(...args);
    if (catchResult === undefined && this.apiUid) {
      removeUnhandleApi(this.apiUid);
    }
  }
  return this.then(undefined, $onRejected.bind(this));
};
