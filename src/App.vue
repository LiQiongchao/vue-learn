<template>
  <div class="todo-container">
    <div class="todo-wrap">

      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>

    </div>
  </div>
</template>


<script>

  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

    export default {
      name: "App",
      components: {
        TodoHeader,
        TodoList,
        TodoFooter
      },

        // 执行异步代码，生命周期的初始
      mounted() {
        this.$store.dispatch('requestTodos')
      }
    }
</script>

<style scoped>

</style>
