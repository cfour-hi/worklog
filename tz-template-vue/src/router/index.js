import Vue from 'vue';
import Router from 'vue-router';
import Container from '@/layouts/Container';

Vue.use(Router);

/**
 * route 对象
 *
 * name: <String> 路由名称 - 用于 vue key 标识和权限控制
 * meta: <Object>
 *  title: <String> 路由标题 - 用于 sidebar 和面包屑 (Breadcrumb) 名称显示
 *  icon: <String> 图标 - 用于 sidebar  图标显示
 *  isHide: <Boolean> 是否隐藏菜单项 - 用于 sidebar 判断是否显示路由菜单项
 *  ignoreAuth: <Boolean> 是否忽略权限 - 用于无需权限只要登录即可访问的页面
 */

export const staticRoutes = [
  {
    name: 'root',
    path: '/',
    redirect: '/home',
    meta: { isHide: true },
  },
  {
    name: 'home',
    path: '/home',
    component: Container,
    children: [
      {
        name: 'homeIndex',
        path: '',
        component: () => import('@/pages/home'),
        meta: { title: '首页', icon: '' },
      },
    ],
  },
  {
    name: '401',
    path: '/401',
    component: () => import('@/pages/401'),
    meta: { isHide: true },
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/pages/404'),
    meta: { isHide: true },
  },
];

/**
 * 利用 require.context实现路由配置去中心化，自动加载新路由文件
 * 文档 https://webpack.js.org/guides/dependency-management/#require-context
 */
export const permissionRoutes = ((req) =>
  req
    .keys()
    // 只导入通过export default导出的路由
    .map((path) => req(path).default)
    // 过滤非数组导出
    .filter(Array.isArray)
    // 合并路由数组
    .reduce((last, current) => [...last, ...current], [])
    .sort((a, b) => a.index - b.index))(
  // 导入当前目录下 非index.js的所有js文件，require.context返回值就是上面的req
  require.context('./', false, /^.\/(?!index)\S+.js$/)
);

export const routeTo404 = {
  path: '*',
  redirect: '/404',
  meta: { isHide: true },
};

export default new Router({
  routes: staticRoutes,
});
