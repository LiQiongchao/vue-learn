<template>
  <div v-if="!repoUrl">loading</div>
  <div v-else>
<!--    most start repo is <a href="">{{repoName}}</a>-->
    most start repo is <a v-bind:href="repoUrl">{{repoName}}</a>
  </div>
</template>


<script>

    import axios from 'axios';

    export default {
      name: "App",
      data () {
        return {
            repoUrl: '',
            repoName: ''
        }
      },
      mounted() {
        // 发送ajaxg请求
          const url = 'https://api.github.com/search/repositories?q=vu&sort=stars';
          /*this.$http.get(url).then(
              successResponse => {
                  const result = successResponse.data;
                  const item = result.items[0];
                  this.repoUrl = item.html_url;
                  this.repoName = item.name;
              },
              failureResponse => {
                  console.log(failureResponse.message)
              }
          ).catch(error => {
              console.log(error.message);
          })*/

          // use axios
          axios.get(url).then(successResponse => {
              const result = successResponse.data;
              const item = result.items[0];
              this.repoUrl = item.html_url;
              this.repoName = item.name;
          }).catch(error => {
              console.log(error)
              alert(error.message);
          })
      }
    }
</script>

<style scoped>

</style>
