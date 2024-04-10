<template>
  <div class="slot">
    <h1>子组件</h1>
    <slot name="header" :data="headerData"></slot>
    <slot :data="defaultData"></slot>
    <slot name="footer" :data="footerData"></slot>
  </div>
</template>

<script lang="ts" setup>
const defaultData = ['defaut1', 'defaut2', 'defaut3']
const headerData = ['header1', 'header2', 'header3']
const footerData = ['footer1', 'footer2', 'footer3']
</script>

<style lang="scss" scoped>
.slot {
  background-color: lightseagreen;
  padding: 20px;
}
</style>
