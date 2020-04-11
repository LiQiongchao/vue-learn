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
        components: {
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

</style>
