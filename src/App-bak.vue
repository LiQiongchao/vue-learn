<template>
  <div>
    <p>clicked : {{count}} times, count is {{isEvenOrOdd}}</p>
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
          return this.count % 2 === 0 ? '偶数' : '奇数'
        }
      },
      methods: {
        // 加1操作
        increment() {
          this.count++;
        },
        //减1操作
        decrement() {
          this.count--;
        },
        // 如果是奇数就加1
        incrementIfOdd() {
          let count = this.count;
          if (count % 2 === 1) {
            this.count = count + 1;
          }
        },
        // 异步加1
        incrementAsync() {
          setTimeout(() => {
            this.count++;
          }, 1000)
        }
      }
    }
</script>

<style scoped>

</style>
