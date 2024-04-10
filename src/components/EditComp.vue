<template>
  <div class="btns">
    <button class="btn" ref="twoFloor">2F</button>
    <button class="btn" ref="meihuoqi">加灭火器</button>
    <button class="btn" ref="delDev">删除选中设备</button>
  </div>
  <!-- 3D容器 -->
  <div id="container" />
</template>

<script lang="ts" setup>
import { type Ref, ref, onMounted, nextTick } from 'vue'
import { Api3DEditDev } from '../utils/apiEditDev.js'
//@ts-ignore
import whole from '../utils/whole.json'
const twoFloor: Ref<any> = ref(null)
const meihuoqi: Ref<any> = ref(null)
const delDev: Ref<any> = ref(null)
const devName: Ref<any> = ref('')

onMounted(async () => {
  await nextTick()

  let rootApp = new Api3DEditDev()

  // rootApp.load(whole3);
  rootApp.load(whole)

  rootApp.addEventListener('onPostInit', () => {
    console.log('===========onPostInit================')
  })

  rootApp.addEventListener('devEditUpdate', (e: any) => {
    console.log('===========devEditUpdate================', e)
  })
  rootApp.addEventListener('devEditInsert', (e: any) => {
    console.log('===========devEditInsert================', e)
    //调接口
  })
  rootApp.addEventListener('devEditDel', (e: any) => {
    console.log('===========devEditDel================', e)
  })

  rootApp.addEventListener('onClickDev', (e: any) => {
    console.log('===========onClickDev================', e)
    devName.value = e.dev.name
  })
  // twoFloor

  twoFloor.value.addEventListener('click', () => {
    rootApp.floorOpen(2)
  })

  meihuoqi.value.addEventListener('click', () => {
    alert('addDev run')
    rootApp.addDev({
      url: 'devgltf/MeiHuoQi.gltf',
      px: 0,
      pz: 0,
      py: 0,
      heigth: 10,
      name: 'mhq_1',
      scale: 10
      // scale: 10
    })
  })

  delDev.value.addEventListener('click', function () {
    alert('delDevByName run')
    rootApp.delDevByName(devName.value)
  })
})
</script>

<style scoped>
body {
  background-color: #fff;
  color: #222;
}

a {
  color: #08f;
}

.btns {
  background-color: #ccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: center;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 99;
}

.btns .btn {
  margin-bottom: 10px;
}

#container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: 9;
}
</style>
