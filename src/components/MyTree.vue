<script setup>
// 树状视图组件
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
const treeData = ref(props.data.children || [])

const isOpen = ref(false)
const isFolder = computed(() => {
  return !!(treeData.value && treeData.value.length)
})

function toggle() {
  isOpen.value = !isOpen.value
}

function changeType(e) {
  if (!isFolder.value) {
    // 杜绝treeData.value为undefined/null的情况
    if (!treeData.value) treeData.value = []
    addChild(treeData.value, e.target.innerText)
    isOpen.value = true
  }
}

function addChild(data, paramStr) {
  if (data.length) {
    const str = data[data.length - 1].name.split('-')[1]
    data.push({ name: 'child folder-' + (parseInt(str) + 1) })
  } else {
    const str = paramStr.split('-')[1]
    data.push({ name: 'child folder-' + (str + '1') })
  }
}
</script>

<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ props.data.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        一个可以通过其“name”选项递归渲染自己的组件，
        (如果使用单文件组件，则从文件名推断)
      -->
      <MyTree class="item" v-for="dataItem in treeData" :key="dataItem.name" :data="dataItem" />
      <li class="add" @click="addChild(treeData)">+</li>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}

ul {
  padding: 10px;
  border: 1px solid #888;
  background-color: #fff;
  li {
    padding-left: 10px;
    list-style: none;
  }
}
</style>
