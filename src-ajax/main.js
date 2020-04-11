import Vue from 'vue'
import App from './App.vue'

// import '../static/css/bootstrap.css'
import VueResource from 'vue-resource';

/**
 * 声明使用插件
 * 内部会给vm对象和组件对象添加一个属性： $http
 */
Vue.use(VueResource)

const vm = new Vue({
  render: h => h(App)
}).$mount("#app");
