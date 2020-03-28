<template>
  <!--
  onmouseenter=""
    当鼠标进入元素时触发的效果
  onmouseleave=""
    当鼠标离开元素时触发的效果
  onmouseover=""
    当鼠标进入元素内其它dom时触发的效果
  onmouseout=""
    当鼠标离开元素内其它dom时触发的效果
  -->
  <li @mouseenter="mouseEnter(true)" @mouseleave="mouseEnter(false)" :style="{backgroundColor: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
    export default {
        name: "TodoHeader",
      props: {
        todo: Object,
        index: Number,
        deleteTodo: Function
      },
      data() {
          return {
            bgColor: "white",
            isShow: false
          }
      },
      methods: {
        mouseEnter(isEnter) {
          if (isEnter) {
            this.bgColor = "#aaa";
          } else {
            this.bgColor = "white";
          }
          this.isShow = isEnter;
        },
        deleteItem() {
          const {todo, index, deleteTodo} = this;
          if (window.confirm(`确定删除${todo.name}吗？`)) {
            deleteTodo(index);
          }
        }

      }
    }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
