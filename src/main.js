import Vue from 'vue'
import App from './App.vue'

// 引入mint-ui css，必须
import 'mint-ui/lib/style.css'

// 全局-引入全部组件
// import MintUI from 'mint-ui';
// Vue.use(MintUI);

// 全局-按需引入部分组件
import {Button, Cell} from 'mint-ui'

// Vue.use(Button);
Vue.component(Button.name, Button);
// 可以自定义引入的组件名
// Vue.component('mint-cell', Cell);
Vue.component(Cell.name, Cell);

const vm = new Vue({
  render: h => h(App)
}).$mount("#app");
