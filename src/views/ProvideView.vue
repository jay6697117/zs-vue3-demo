<template>
  <div class="provide-view">
    我是本人
    <button @click="change">change falg</button>
    <div class="flag">flag: {{ flag }}</div>
    <ProvideComp />
  </div>
</template>

<script lang="ts" setup>
let flag = ref<number>(1)
const change = () => {
  flag.value += 1
}
provide<Ref<number>, string>('flag', flag)
</script>

<style lang="scss" scoped>
.provide-view {
  background: blue;
  color: #fff;
  padding: 20px;

  .flag {
    margin-bottom: 20px;
  }
}
</style>
