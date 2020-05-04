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

  import {mapState, mapGetters, mapActions} from "vuex"

    export default {
      name: "App",
      // 写法一
      /*computed: mapGetters({
        // 值为getters里的方法名
        isEvenOrOdd: 'isEvenOrOdd'
      }),*/

      computed: {
        // 写法二，方便，数组中可以写多个
        // mapGetters()返回值：{isEvenOrOdd() {return $store.getters['isEvenOrOdd']}}
        // 3个点为ES6的解构赋值，see more:https://segmentfault.com/q/1010000020240597
        ...mapGetters(['isEvenOrOdd']),
        // 当本地方法名与Getters中的方法名不一致时的写法，最好方法名一致，那样可以写成数组形式，比较方便
        // ...mapGetters({isEvenOrOdd: 'isEvenOrOdd2'}),
        ...mapState(['count'])
      },

      methods: {
        ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
      }
    }
</script>

<style scoped>

</style>
