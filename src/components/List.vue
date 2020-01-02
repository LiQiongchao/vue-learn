<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none' v-show="comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
    <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :index="index" :deleteComment="deleteComment"/>
  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    // 接收方式1：只指定的属性名
    // props: ['comments'],
    // 接收方式2：指定属性名与属性
    props: {
      comments: Array,
      deleteComment: Function
    },
    components: {
      Item
    }
  }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>
