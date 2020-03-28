<template>
  <div class="todo-footer">
    <label>
<!--      <input type="checkbox" v-model="isAllCheck"/>-->
      <slot name="allCheck"></slot>
    </label>
<!--    <span><span>已完成{{completeNum}}</span> / 全部{{todos.length}}</span>-->
    <slot name="count">count</slot>
<!--    <button class="btn btn-danger" v-show="completeNum" @click="delSelectItem">清除已完成任务</button>-->
    <slot name="delete"></slot>
  </div>
</template>

<script>
    export default {
      name: "TodoHeader"
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
