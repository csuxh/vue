import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

// // 注册全局组件, 整个项目都可以调用，一般不用
// // 1. 引入组件
// import Users from './components/Users.vue';
// // 2. 注册
// Vue.component('users', Users);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
