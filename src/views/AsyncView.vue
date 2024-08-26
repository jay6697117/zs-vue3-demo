<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>加载中1...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// 定义一个异步组件
const AsyncComponent = defineAsyncComponent(() =>
  import('@/components/AsyncComponent.vue')
)
</script>
