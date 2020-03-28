<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 传递方式一 -->
<!--      <TodoHeader :addTodos="addTodos"/>-->
      <!-- 传递方式二 -->
<!--      <TodoHeader @addTodo="addTodos"/>-->
      <!-- 传递方式三 -->
      <TodoHeader ref="header"/>
<!--      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>-->
      <TodoList :todos="todos"/>
      <TodoFooter :todos="todos" :selectAll="selectAll" :delSelectItem="delSelectItem"/>
    </div>
  </div>
</template>


<script>

  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import PubSub from 'pubsub-js'

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
      },
        // 执行异步代码，生命周期的初始
      mounted() {
          // 给<TodoHeader/>绑定addTodo事件监听
          // this.$on('addTodo', this.addTodos);
          this.$refs.header.$on('addTodo', this.addTodos);

          // 订阅消息
          // PubSub.subscribe('deleteTodo', function (msg, data) {});
          // 使用简写是为了使用this，只有这样this才是指向的是当前的页面对象
          PubSub.subscribe('deleteTodo', (msg, index) => {
              this.deleteTodo(index);
          });
      }
    }
</script>

<style scoped>

</style>
