import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
import { goLogin } from '@/utils/auth';

let uid = 0;

const unhandleAPI = [];
const TOKEN_ERROR_CODES = [
  6101,
  '6101',
  999997004,
  '999997004',
  999997005,
  '999997005',
];

if (process.env.NODE_ENV !== 'production') {
  window.unhandleAPI = unhandleAPI;
}

export function removeUnhandleApi(id) {
  const index = unhandleAPI.findIndex((apiUid) => apiUid === id);

  // 方便非 production 环境查看接口处理情况
  if (process.env.NODE_ENV === 'production') {
    unhandleAPI.splice(index, 1);
  } else {
    unhandleAPI[index] += '#removed';
  }
}

/**
 * 配合接口层状态异常统处理
 * @param {Object} config
 */
const axiosRequest = axios.Axios.prototype.request;
axios.Axios.prototype.request = function(config) {
  uid += 1;
  const apiUid = `${config.url}?uid=${uid}`;
  config.apiUid = apiUid;
  unhandleAPI.push(apiUid);

  /**
   * 接口可能在响应之前被取消 (abort)
   * 取消的方法内需要知道 apiUid
   * 保证取消时能够从 unhandleApi 内移除当前 apiUid
   * 详情查看 src/polyfill.js
   */
  if (config.cancelToken) config.cancelToken.apiUid = apiUid;

  const p = axiosRequest.call(this, config);
  p.apiUid = apiUid;
  return p;
};

/**
 * 接口存在被取消的可能
 * 所以在取消的方法内需要将当前 apiUid 从 unhandleAPI 内移除
 */
const acts = axios.CancelToken.source;
axios.CancelToken.source = function() {
  const source = acts.call(this);
  const sourceCancel = source.cancel;

  source.cancel = function(message) {
    sourceCancel.call(this, message);
    const { apiUid } = source.token;
    if (apiUid && unhandleAPI.find((id) => id === apiUid)) {
      removeUnhandleApi(apiUid);
    }
  };

  return source;
};

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: process.env.NODE_ENV === 'development' ? 9e4 : 9e3,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
service.Cancel = axios.Cancel;
service.CancelToken = axios.CancelToken;
service.isCancel = axios.isCancel;

service.interceptors.request.use(
  (config) => {
    if (
      config.method === 'post' &&
      Object.prototype.toString.call(config.data) !== '[object FormData]'
    ) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

function handleAPIStatusError(pr, msg) {
  const index = unhandleAPI.findIndex((apiUid) => apiUid === pr.apiUid);
  if (index < 0) return;

  pr.catch(() => {
    Message.error({ message: msg, duration: 5e3 });
  });
}

service.interceptors.response.use(
  ({ data, config }) => {
    const { status, msg, data: result } = data;

    if (TOKEN_ERROR_CODES.includes(status)) return goLogin();

    // 因为各系统返回状态值类型不一致，所以需要特殊处理
    /* eslint-disable eqeqeq */
    if (status != '0') {
      const pr = Promise.reject(data);
      pr.apiUid = config.apiUid;
      // 异常先交由业务代码处理
      setTimeout(handleAPIStatusError, 0, pr, msg);
      return pr;
    }

    removeUnhandleApi(config.apiUid);
    return result;
  },
  (error) => {
    Message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
