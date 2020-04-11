import Vue from 'vue'
import App from './App.vue'

import '../static/css/bootstrap.css'

const vm = new Vue({
  render: h => h(App)
}).$mount("#app");
