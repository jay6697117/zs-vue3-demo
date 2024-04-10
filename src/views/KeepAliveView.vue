<template>
  <div>
    <button @click="$router.push('/slot')">GO slot</button>
    <h1>KeepAliveView</h1>
    <hr />
    <KeepAliveComp />
  </div>
</template>

<script lang="ts" setup name="KeepAliveView6">
onMounted(() => {
  console.log('onMounted run1')
})
onActivated(() => {
  console.log('onActivated run2')
})
onDeactivated(() => {
  console.log('onDeactivated run3')
})
</script>

<style lang="scss" scoped></style>
