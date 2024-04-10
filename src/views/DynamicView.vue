<template>
  <div class="dynamic-view">
    <h1>我是DynamicView</h1>
    <hr />
    <button
      :class="[tab.name === activeTab.name ? 'clicked' : '']"
      v-for="tab in tabs"
      :key="tab.name"
      @click="handleClick(tab)"
    >
      {{ tab.name }}
    </button>
    <component :is="activeTab.comp"></component>
  </div>
</template>

<script lang="ts" setup>
import DynamicComp1 from '@/components/Dynamic/DynamicComp1.vue'
import DynamicComp2 from '@/components/Dynamic/DynamicComp2.vue'
import DynamicComp3 from '@/components/Dynamic/DynamicComp3.vue'
const activeTab = ref({ name: '动态组件1', comp: markRaw(DynamicComp1) })
const tabs = ref([
  { name: '动态组件1', comp: markRaw(DynamicComp1) },
  { name: '动态组件2', comp: markRaw(DynamicComp2) },
  { name: '动态组件3', comp: markRaw(DynamicComp3) }
])
const handleClick = (tab: any) => {
  activeTab.value = tab
}
</script>

<style lang="scss" scoped>
.dynamic-view {
  padding: 20px 0;
  button {
    margin-top: 20px;
    outline: none;
    border: none;
    padding: 10px 20px;
  }

  button.clicked {
    background-color: skyblue;
  }
}
</style>
