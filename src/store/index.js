
import Vue from "vue"
import Vuex from 'vuex'
import todo from './moudle/todo'
import todo2 from './moudle/todo2'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  // 里面是所有的模块
  modules: {
    todo,
    todo2
  },
  getters
})
