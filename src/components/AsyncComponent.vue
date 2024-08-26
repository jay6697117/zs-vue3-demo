<template>
  <div>
    <h1>异步组件内容:</h1>
    <p>这是一个异步加载的组件。</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const loading = ref(true)
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve(false)
  }, 3000) // 模拟异步加载，2秒后完成
})
loading.value = await p.catch((err) => console.error(err))
</script>
