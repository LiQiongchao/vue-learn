<template>
  <ul>
    <!--// 在子路由中可以通过$route来获取父路由中传递的参数。-->
    <!--<li>id: {{$route.params.id}}</li>-->
    <li>id: {{msgDetail.id}}</li>
    <li>title: {{msgDetail.title}}</li>
    <li>content: {{msgDetail.content}}</li>
  </ul>
</template>

<script>

  const messageDetailArr = [
    {id: 1, title: "Message001", content: "message content 001"},
    {id: 3, title: "Message003", content: "message content 003"},
    {id: 5, title: "Message005", content: "message content 005"}
  ]

  export default {
    name: 'MessageDetail',
    data() {
      return {
        msgDetail: {}
      }
    },
    // mounted只会在初始化vue后执行一次，所以在点击其它id的时候不会执行。
    mounted () {
      // 防止参数id为字符，所以进行 *1 转换成数字
      const id = this.$route.params.id * 1;
      this.msgDetail = messageDetailArr.find(msg => msg.id === id)
    },

    watch: {
      $route: function (newValue) {
        this.msgDetail = messageDetailArr.find(msg => msg.id === newValue.params.id * 1)
      }
    }
  }
</script>

<style scoped>

</style>
