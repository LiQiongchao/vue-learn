<template>
  <div>
    <img src="./assets/logo.png" alt="vue logo">
      <!-- 3- 使用组件 -->
      <HelloWorld/>
  </div>
</template>

<script>
  // 使用组件3步
  // 1- 引用组件
  import HelloWorld from "./components/HelloWorld.vue"
  export default {
    // 2- 映射组件标签
    components: {
      HelloWorld
    }
  }
</script>

<style>
  div img {
    height: 200px;
    width: 200px;
  }
</style>
