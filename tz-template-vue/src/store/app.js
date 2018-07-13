import { staticRoutes } from '@/router';

/**
 * 过滤静态路由菜单
 * @param {Array} routes: 路由列表
 */
function filterStaticRoutesMenu(routes) {
  return routes.filter((route) => {
    if (route.children && route.children.length) {
      route.children = filterStaticRoutesMenu(route.children);
    }
    return (
      (route.meta && !route.meta.isHide) ||
      (route.children && route.children.length)
    );
  });
}

/**
 * 过滤非静态路由菜单
 * @param {Array} routes: 路由列表
 */
function filterPermissionRoutesMenu(routes) {
  const children = [];
  routes.forEach((route) => {
    if (route.children && route.children.length) {
      const result = filterPermissionRoutesMenu(route.children);
      route.children = result.length ? result : [];
    }
    if (
      route.meta &&
      !route.meta.isHide &&
      ((route.children && route.children.length) ||
        (!route.children && route.redirect !== '/401'))
    ) {
      children.push(route);
    }
  });
  return children;
}

export default {
  state: {
    permissionRoutes: [],
  },
  getters: {
    menu(state) {
      return [
        ...filterStaticRoutesMenu(staticRoutes),
        ...filterPermissionRoutesMenu(state.permissionRoutes),
      ];
    },
  },
  mutations: {
    SET_PERMISSION_ROUTES(state, routes) {
      state.permissionRoutes = routes;
    },
  },
};
