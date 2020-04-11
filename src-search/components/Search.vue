<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchKey" v-on:keyup.enter="search"/>
        <button @click="search">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
    import Pubsub from 'pubsub-js';

  export default {
      name: "search",
      data() {
          return {
              searchKey: ''
          }
      },
      methods: {
          search() {
              const searchKey = this.searchKey.trim();
              if (searchKey) {
                  Pubsub.publish("searchKey", searchKey);
              } else {
                  alert("搜索不能为空");
              }
          }
      }
  }
</script>

<style scoped>

</style>
