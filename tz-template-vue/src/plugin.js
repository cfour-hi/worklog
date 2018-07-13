import store from '@/store';
import Vue from 'vue';
import dayjs from 'dayjs';

Vue.prototype.dayjs = dayjs;

/**
 * 权限检测
 * @param {String|Array} id - 权限标识
 */
Vue.prototype.checkPermission = function(id) {
  const permission = typeof id === 'string' ? [id] : id;
  if (!Array.isArray(permission)) throw new Error('权限检测参数错误');

  return permission.some((p) => store.state.user.permissions.includes(p));
};
