// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'font-awesome/css/font-awesome.css'
import 'normalize.css';
import 'babel-polyfill';
import Vue from 'vue';
import ElementUI from 'element-ui';
import './polyfill';
import './permission';
import './components';
import './mixin';
import './plugin';
import './filter';
import './icons';
import App from './App';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
