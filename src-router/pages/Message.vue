<template>
  <div>
    <ul v-for="msg in messageArr" :key="msg.id">
      <li>
        <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
        <button @click="pushShow(msg.id)">push查看</button>
        <button @click="replaceShow(msg.id)">replace查看</button>
      </li>
    </ul>
    <hr>
    <button @click="$router.back()">回退</button>
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
    },

    methods: {
      pushShow(id) {
        this.$router.push(`/home/message/detail/${id}`);
      },
      replaceShow(id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style scoped>

</style>
