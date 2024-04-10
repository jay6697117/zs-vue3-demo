<template>
  <div class="wraps">
    <div
      :style="{
        height: item.height + 'px',
        background: item.background,
        top: item.top + 'px',
        left: item.left + 'px'
      }"
      v-for="(item, index) in waterList"
      :key="index"
      class="items"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps<{
  list: any[]
}>()

const propsList = ref(props.list)
const waterList = ref<any[]>([])
const init = () => {
  const heightList: any[] = []
  const width = 130
  const x = document.body.clientWidth
  const column = Math.floor(x / width)

  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      propsList.value[i].top = 10
      propsList.value[i].left = i * width
      heightList.push(propsList.value[i].height + 10)
      waterList.value.push(propsList.value[i])
    } else {
      let current = heightList[0]
      let index = 0
      heightList.forEach((h, inx) => {
        if (current > h) {
          current = h
          index = inx
        }
      })
      console.log(current, 'c')
      propsList.value[i].top = current + 20
      console.log(propsList.value[i].top, 'top', i)
      propsList.value[i].left = index * width
      heightList[index] = heightList[index] + propsList.value[i].height + 20
      waterList.value.push(propsList.value[i])
    }
  }
  console.log('propsList.value :>> ', propsList.value)
}
onMounted(() => {
  window.onresize = () => init()
  init()
})
</script>

<style lang="scss" scoped>
.wraps {
  position: relative;
  height: 100%;
  .items {
    position: absolute;
    width: 120px;
  }
}
</style>
