import Vue from 'vue'
import Router from 'vue-router'
import AppWrapper from '@/components/AppWrapper'
import Overview from '@/components/Overview'
import Module1Router from '@/components/module1/router'
import Module2Router from '@/components/module2/router'

Vue.use(Router)

let routes = [
  { path: '/', name: 'AppWrapper', component: AppWrapper },
  { path: '/overview', name: 'Overview', component: Overview },
]
routes.push(Module1Router)
routes.push(Module2Router)


export default new Router({
  routes: routes
})

// export default new Router({
//   routes: [
//     { path: '/', name: 'AppWrapper', component: AppWrapper },
//     { path: '/module1', name: 'Module1', component: Module1Page1 },
//     { path: '/module2', name: 'Module2', component: Module2Page1 }
//   ]
// })
