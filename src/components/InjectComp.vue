<template>
  <div class="inject-comp">
    我是孙子
    <button @click="change">change falg</button>
    <div class="flag">flag: {{ flag }}</div>
  </div>
</template>

<script lang="ts" setup>
const flag = inject<Ref<number>>('flag', ref(1))
const change = () => {
  flag.value *= 2
}
</script>

<style lang="scss" scoped>
.inject-comp {
  background-color: red;
  color: #fff;
  padding: 20px;

  .flag {
    margin-bottom: 20px;
  }
}
</style>
