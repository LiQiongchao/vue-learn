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
          /*todos: [
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
          ]*/
          // todos的数据从本地缓存文件中取，如果没有，显示则为空数组
          todos: JSON.parse(window.localStorage.getItem("todo_arr") || "[]")
        }
      },
      components: {
        TodoHeader,
        TodoList,
        TodoFooter
      },
      watch: {
        // 深度监控，数据如果发生变化则保存到localStorage
          todos: {
              // 开启尝试监视, 为了发现对象内部值的变化
              deep: true,
              // handler: function (newVal, oldVal) {
              handler: function (newVal) {
                  // 把新的数组转变成json保存到localStorage中
                  window.localStorage.setItem("todo_arr", JSON.stringify(newVal));
              }
          }
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
