import Vue from 'vue'
import App from './App.vue'

import '../static/css/bootstrap.css'
// 定义路由的位置
// import routerIndex from './router'
import router from './router'

const vm = new Vue({
  render: h => h(App),
  // 写法一
  // router: routerIndex
  // 如果路由名定义成router，可以简写如下
  router
}).$mount("#app");
