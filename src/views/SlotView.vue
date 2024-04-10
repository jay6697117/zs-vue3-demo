<template>
  <div class="slot-view">
    <button @click="$router.push('/keepAlive')">GO keepAlive</button>
    <h1>父组件</h1>
    <hr />
    <br />
    <SlotComp>
      <!-- <template #header="headerData">
        <hr>
        <div>headerData: {{ headerData }}</div>
        <h1 style="background-color: green; color: #fff; margin-bottom: 10px">header slot</h1>

      </template>
      <template #default="defaultData">
        <hr>
        <div>defaultData: {{ defaultData }}</div>
        <h1 style="background-color: blue; color: #fff;margin-bottom: 10px;">default slot</h1>
      </template>
      <template #footer="footerData">
        <hr>
        <div>footerData: {{ footerData }}</div>
        <h1 style="background-color: green; color: #fff; margin-top: 10px">footer slot</h1>
      </template> -->

      <!-- <template #header="{ data }">
        <hr />
        <div>{{ data }}</div>
        <h1 style="background-color: green; color: #fff; margin-bottom: 10px">header slot</h1>
      </template>
      <template #default="{ data }">
        <hr />
        <div>{{ data }}</div>
        <h1 style="background-color: blue; color: #fff; margin-bottom: 10px">default slot</h1>
      </template>
      <template #footer="{ data }">
        <hr />
        <div>{{ data }}</div>
        <h1 style="background-color: green; color: #fff; margin-top: 10px">footer slot</h1>
      </template> -->

      <template v-for="(item, index) in items" :key="index" #[item]="{ data }">
        <hr />
        <div>{{ data }}</div>
        <h1 :style="{ backgroundColor: colors[index], color: '#fff', marginTop: '10px' }">
          {{ item }} slot
        </h1>
      </template>
    </SlotComp>
  </div>
</template>

<script lang="ts" setup>
const items = ref(['header', 'default', 'footer'])
const colors = ref(['green', 'blue', 'green'])

onActivated(() => {
  console.log('slot onActivated run1')
})
onDeactivated(() => {
  console.log('slot onDeactivated run2')
})

</script>

<style lang="scss" scoped>
.slot-view {
  padding: 20px 15px 0;
  background-color: #ccc;
  width: 100%;
  height: 100%;
}

h1 {
  padding: 10px;
}
</style>
