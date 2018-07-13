import { Message } from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import qs from 'qs';
import request from '@/utils/request';
import router, { permissionRoutes, routeTo404 } from './router';
import store from './store';
import { getToken, setToken, goLogin } from './utils/auth';

let token = getToken();

if (!token && process.env.MOCK) {
  token = '0';
  setToken(token);
}

if (window.location.search) {
  const search = qs.parse(window.location.search.slice(1));
  if (search.token) {
    /* eslint-disable prefer-destructuring */
    token = search.token;
    setToken(token);
    let href = window.location.href.replace(/token=[^&]+/, '');
    if (href[href.length - 1] === '?') href = href.slice(0, -1);
    window.history.replaceState({}, null, href);
  }
}

if (!token) goLogin();

request.defaults.headers.token = token;
store.commit('SET_USER_DATA', { key: 'token', value: token });

/**
 * 将没有权限的路由项添加 redirect 401
 * @param {Array} routes
 * @param {Array} permissions: 所有权限标识集合
 */
function setRoutesPermission(routes, permissions) {
  routes.forEach((route) => {
    if (route.children && route.children.length) {
      setRoutesPermission(route.children, permissions);
    } else if (
      !permissions.includes(route.name) &&
      route.meta &&
      !route.meta.ignoreAuth
    ) {
      route.redirect = '/401';
    }
  });
}

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (token) {
    if (store.state.user.permissions.length) {
      next();
    } else {
      store
        .dispatch('getUserPermissions')
        .then((response) => {
          setRoutesPermission(permissionRoutes, response.list);
          store.commit('SET_PERMISSION_ROUTES', permissionRoutes);
          router.addRoutes([...permissionRoutes, routeTo404]);
          next({ ...to, replace: true }); // hack 保证动态路由插入后能够输出页面内容
        })
        .catch((error) => {
          Message.error(error.msg || '用户权限获取失败，已注销登录');
          goLogin();
        });
      store.dispatch('getUserInfo');
    }
  } else {
    goLogin();
  }
});

router.afterEach(() => {
  NProgress.done();
});
