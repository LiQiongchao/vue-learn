import Vue from 'vue'
import App from './App.vue'

// import '../static/css/bootstrap.css'
import '../static/css/todo-base.css'
import store from './store/index'

const vm = new Vue({
  render: h => h(App),
  store
}).$mount("#app");
