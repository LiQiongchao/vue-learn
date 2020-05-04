/*
* vuex最核心的管理对象store
* */
import Vue from 'vue'
import Vuex from 'vuex'

// 声明式使用
Vue.use(Vuex)

/**
 * 相当于data对象的状态对象
 * @type {{}}
 */
const state = {
  count: 0
}

/**
 * 包含了n个直接更新状态的方法的对象
 */
const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count++
  }
}

/**
 * 包含N个间接更新状态的方法的对象，用以操作mutations的方法
 * @type {{}}
 */
const actions = {
  increment({commit}) {
    // 提交一个增加1的mutation的请求，会找mutations里的increment方法
    commit('INCREMENT')
  },
  decrement({commit}) {
    // 提交一个减1的mutation的请求，会找mutations里的increment方法
    commit('DECREMENT')
  },
  incrementIfOdd({commit, state}) {
    // 提交一个增加1的mutation的请求，会找mutations里的increment方法
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}) {
    // 提交一个增加1的mutation的请求，会找mutations里的increment方法
    setTimeout(()=>{
      commit('INCREMENT')
    }, 1000)
  }
}

/**
 * 包含多个getter计算属性的对象
 * 对属性进行处理后，返回处理后的值
 * @type {{}}
 */
const getters = {
  // Vuex会自动注入state对象
  isEvenOrOdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
