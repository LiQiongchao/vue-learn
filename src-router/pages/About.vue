<template>
  <div>
    <h2>About</h2>
    <p>[{{msg}}]</p>
    <input type="text" :placeholder="msg">
  </div>
</template>

<script>
  export default {
    name: 'About',
    props: {
      msg: String
    }
  }
</script>

<style scoped>

</style>
