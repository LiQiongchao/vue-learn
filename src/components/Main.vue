<template>
  <div>
    <!--结果区会有4种状态，搜索前，搜索中，搜索后，错误后-->
    <H2 v-if="firstStatus">请输入内容开始搜索</H2>
    <H2 v-if="searchingStatus">LOADING</H2>
    <H2 v-if="!errorMsg">{{errorMsg}}</H2>
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

    import Pubsub from 'pubsub-js';
    import axois from 'axios'

    export default {
        name: "Main",
        data() {
            return {
                firstStatus: true,
                searchingStatus: false,
                errorMsg: '',
                users: null // [{name: '', url: '', imgUrl: ''}]
            };
        },
        mounted() {
            // 订阅到消息后，发送ajax请求
            Pubsub.subscribe("searchKey", (msg, searchKey) => {
                console.log(msg)
                const url = `https://api.github.com/search/users?q=${searchKey}`;
                this.firstStatus = false;
                this.searchingStatus = true;
                this.errorMsg = ''
                this.users = null
                axois.get(url).then(resp => {
                    const items = resp.data.items;
                    this.searchingStatus = false;
                    this.users = items.map(item => ({
                        name: item.login,
                        url: item.html_url,
                        imgUrl: item.avatar_url
                    }))
                }).catch(error => {
                    this.searchingStatus = false;
                    this.errorMsg = error.message;
                })
            })
        }
    }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
