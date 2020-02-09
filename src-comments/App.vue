<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'

    export default {
      data() {
        // 这里要使用return的方式声名
        return {
          comments: [
            {
              name: 'Jack',
              content: "vue 很不错。"
            },{
              name: 'Rose',
              content: "vue, I like it."
            },{
              name: 'Lee',
              content: "vue is so difficult."
            }
          ]
        }
      },
      components: {
        List,
        Add
      },
      methods: {
        // 在数组前添加一个元素
        addComment(comment) {
          this.comments.unshift(comment)
        },
        // 删除指定下标的评论
        deleteComment(index) {
          // 从index开始删除，删除一个
          this.comments.splice(index, 1)
        }
      }
    }
</script>

<style scoped>

</style>
