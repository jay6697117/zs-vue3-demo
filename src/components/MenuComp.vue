<template>
  <div class="menu">
    <button @click="handleClick">派发给父组件</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const list = ref<number[]>([1, 2, 3])

const emit = defineEmits(['on-click'])

const handleClick = () => {
  emit('on-click', list.value)
}

defineExpose({
  list
})
</script>

<style lang="scss" scoped>
.menu {
  text-align: center;
  width: 400px;
  margin: 50px auto 0;
  padding: 20px;
  background-color: red;
}
</style>
