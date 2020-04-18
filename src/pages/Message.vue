<template>
  <div>
    <ul v-for="(msg, index) in messageArr" :key="msg.id">
      <li><router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link></li>
    </ul>

    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data() {
      return {
        messageArr: {}
      }
    },

    mounted () {
      setTimeout(() => {
        const msgs = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 5, title: 'message005'},
        ]
        this.messageArr = msgs
      }, 1000)
    }
  }
</script>

<style scoped>

</style>
