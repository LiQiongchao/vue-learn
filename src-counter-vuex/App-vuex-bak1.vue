<template>
  <div>
    <p>clicked : {{$store.state.count}} times, count is {{isEvenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>


<script>
    export default {
      name: "App",
      data() {
          return{
            count: 0
          }
      },

      computed: {
        isEvenOrOdd() {
          return this.$store.getters.isEvenOrOdd
        }
      },
      methods: {
        // 加1操作
        increment() {
          this.$store.dispatch('increment')
        },
        //减1操作
        decrement() {
          this.$store.dispatch('decrement')
        },
        // 如果是奇数就加1
        incrementIfOdd() {
          this.$store.dispatch('incrementIfOdd')
        },
        // 异步加1
        incrementAsync() {
          this.$store.dispatch('incrementAsync')
        }
      }
    }
</script>

<style scoped>

</style>
