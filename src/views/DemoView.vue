<template>
  <div class="layout">
    <Menu ref="refMenu" @on-click="getList"></Menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRaw, nextTick } from 'vue'
import Menu from '@/components/MenuComp.vue'

const refMenu = ref<any>(null)
const getList = (list: number[]) => {
  console.log('父组件接受子组件:', list)
  console.log('父组件接受子组件:', toRaw(list))
}

;(async () => {
  await nextTick()
  console.log('refMenu.value.list 1:', refMenu.value.list)
})()
</script>

<style lang="scss" scoped>
@mixin bg-color {
  padding: 20px;
  background-color: blue;
}

.layout {
  @include bg-color;
}
</style>
