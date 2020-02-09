<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{completeNum}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeNum" @click="delSelectItem">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
      name: "TodoHeader",
      props: {
        todos: Array,
        selectAll: Function,
        delSelectItem: Function
      },
      computed: {
        // 计算选中的item数
        completeNum() {
          // reduce 第一个参数是方法名，参数为计算量的返回值和单个的数组对象，第二个参数是从第几个元素开始。
          return this.todos.reduce((selectTotal, todo) => selectTotal += todo.complete ? 1 : 0, 0);
        },
        // 是否全选，双向绑定
        isAllCheck: {
          set(value) {
            this.selectAll(value);
          },
          get() {
            return this.todos.length === this.completeNum && this.todos.length > 0;
          }
        }
      }
    }
</script>

<style scoped>

  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
