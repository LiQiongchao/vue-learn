
// 入口js：创建Vue实例

import Vue from 'vue'
import App from './App.vue'

const vm = new Vue({
  render: h => h(App)
}).$mount("#app")
