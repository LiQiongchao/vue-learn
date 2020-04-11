<template>
  <div class="container">
    <Search></Search>
    <users-main></users-main>
<!--    <usersMain></usersMain>-->
  </div>
</template>


<script>

    import Search from './components/Search';
    import Main from './components/Main';

    export default {
        name: "App",
        components: {Search},
        comments: {
          Search,
          usersMain: Main
        },
        data() {
            return {
                repoUrl: '',
                repoName: ''
            }
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
