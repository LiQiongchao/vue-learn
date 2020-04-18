<template>
  <mt-button type="primary" @click.native="clickTest" style="width: 100%;">test</mt-button>
</template>


<script>

  // 引入Toast消息提示框
    import { Toast } from 'mint-ui';

    export default {
        name: "App",
        methods: {
            clickTest() {
                Toast("干啥那？瞎点啥玩意。")
            }
        }
    }
</script>

<style scoped>

</style>
