<template>
  <div class="hello">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  // 配置对象，与Vue一致
  export default {
    data() {
      return {
        msg: "hello man!"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    color: red;
    font-size: 30px;
  }
</style>
