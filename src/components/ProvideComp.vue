<template>
  <div class="provide-comp">
    我是儿子
    <button @click="change">change falg</button>
    <div class="flag">flag: {{ flag }}</div>
    <InjectComp />
  </div>
</template>

<script lang="ts" setup>
const flag = inject<Ref<number>>('flag', ref(1))
const change = () => {
  flag.value += 10
}
</script>

<style lang="scss" scoped>
.provide-comp {
  background-color: green;
  color: #fff;
  padding: 20px;

  .flag {
    margin-bottom: 20px;
  }
}
</style>
