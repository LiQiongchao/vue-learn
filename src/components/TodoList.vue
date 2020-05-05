<template>
  <ul class="todo-main">
    <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  import {mapState, mapGetters} from 'vuex'
  import storageUtils from "../util/storageUtils";

  export default {
      name: "TodoList",
    components: {
      TodoItem
    },
    computed: {
        ...mapGetters(['todos'])
    },
    watch: {
        todos: {
          deep: true,
          handler: storageUtils.saveTodo
        }
    }
  }
</script>

<style scoped>

  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
