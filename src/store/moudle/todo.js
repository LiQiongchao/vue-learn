/*
* 这里面定义的是todo所有的功能模块，
* 只需要在本模块调用的方法定义在本文件中，否则定义在公共的getters，actions中去。
* */

import {ADD_TODO, DELETE_TODO, DELETE_SELECT_ITEM,SELECT_ALL,RECEIVE_TODOS} from '../TodoConst'
import storageUtils from '../../util/storageUtils'

const state = {
  todos: []
}

const getters = {
  todos (state) {
    return state.todos
  },
  completeNum(state) {
    // reduce 第一个参数是方法名，参数为计算量的返回值和单个的数组对象，第二个参数是从第几个元素开始。
    return state.todos.reduce((selectTotal, todo) => selectTotal += todo.complete ? 1 : 0, 0);
  },
  todosSize(state) {
    // reduce 第一个参数是方法名，参数为计算量的返回值和单个的数组对象，第二个参数是从第几个元素开始。
    return state.todos.length;
  },
  isAllCheck(state, getters) {
    // 这里不能使用this对象
    return state.todos.length === getters.completeNum && state.todos.length > 0;
  }
}

const actions = {
  addTodo({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  [DELETE_TODO] ({ commit }, index) {
    commit(DELETE_TODO, {index})
  },
  [DELETE_SELECT_ITEM] ({commit}) {
    commit(DELETE_SELECT_ITEM)
  },
  selectAll({commit}, isCheck) {
    commit(SELECT_ALL, {isCheck})
  },
  requestTodos({commit}, todos) {
    // 模拟请求数据
    setTimeout(() => {
      const todos = storageUtils.readTodo()
      commit(RECEIVE_TODOS, {todos})
    }, 1000)
  }
}

const mutations = {
  // 添加一个元素
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1);
  },
  // 删除选中
  [DELETE_SELECT_ITEM] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [SELECT_ALL] (state, {isCheck}) {
    state.todos.forEach(todo => todo.complete = isCheck)
  },
  [RECEIVE_TODOS](state, {todos}) {
    state.todos = todos
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
