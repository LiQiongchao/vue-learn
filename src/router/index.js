/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'

// 声明使用vue-router插件
/*
内部定义并注册了2个组件标签（router-link/router-view）,
给组件对象添加了2个属性：
  - $router: 路由器
  - $route: 当前路由
 */
Vue.use(VueRouter)

export default new VueRouter({
  // 注册就用中的所有路由
  routes: [
    {
      // path中加‘/’表示以绝对路径开始，否则是以相对路径开始
      path: '/home',
      component: Home
    },{
      path: '/about',
      component: About
    }
  ]
})
