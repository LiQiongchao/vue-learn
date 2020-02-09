<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodos="addTodos"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :selectAll="selectAll" :delSelectItem="delSelectItem"/>
    </div>
  </div>
</template>


<script>

  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

    export default {
      name: "App",
      data() {
        return {
          todos: [
            {
              "id": 1,
              "name": "上班",
              "complete": false
            },
            {
              "id": 2,
              "name": "吃饭",
              "complete": true
            },
            {
              "id": 3,
              "name": "coding",
              "complete": false
            }
          ]
        }
      },
      components: {
        TodoHeader,
        TodoList,
        TodoFooter
      },
      methods: {
        // 添加
        addTodos(todo) {
          this.todos.unshift(todo);
        },
        // 删除元素
        deleteTodo(index) {
          this.todos.splice(index, 1);
        },
        // 全选/全不选
        selectAll(check) {
          this.todos.forEach(todo => todo.complete = check);
        },
        // 删除选中
        delSelectItem() {
          this.todos = this.todos.filter(todo => !todo.complete)
        }
      }
    }
</script>

<style scoped>

</style>
