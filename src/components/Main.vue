<template>
  <div>
    <!--结果区会有4种状态，搜索前，搜索中，搜索后，错误后-->
    <div v-if="firstStatus">请输入内容开始搜索</div>
    <div v-if="searchingStatus">LOADING</div>
    <div v-if="!errorMsg">{{errorMsg}}</div>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.imgUrl" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                firstStatus: true,
                searchingStatus: false,
                errorMsg: '',
                users: '' // [{name: '', url: '', imgUrl: ''}]
            };
        }
    }
</script>

<style scoped>

</style>
