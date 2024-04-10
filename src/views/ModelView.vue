<template>
  <button @click="handleOpen">打开</button>
  <button @click="handleClose">关闭</button>
  <h1>父open:{{ open }}</h1>
  <h1>父close:{{ close }}</h1>
  <h1>父title:{{ title }}</h1>
  <h1>父content:{{ content }}</h1>
  <ModelComp v-model="open" v-model:close="close" v-model:title.aaa="title" v-model:content.bbb="content" />
</template>

<script lang="ts" setup>
const open = ref(false)
const close = ref(true)
const title = ref('title')
const content = ref('CONTENT')

const handleOpen = () => {
  open.value = true
  close.value = false
}

const handleClose = () => {
  close.value = true
  open.value = false
}
</script>

<style lang="scss" scoped></style>
