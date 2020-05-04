import Vue from 'vue'
import App from './App.vue'

import '../static/css/bootstrap.css'
import store from './store'


const vm = new Vue({
  render: h => h(App),
  // 注册上vuex的store: 所有组件对象都多一个属性$store
  store
}).$mount("#app");
