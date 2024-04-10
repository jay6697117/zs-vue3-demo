<template>
  <div class="btns">
    <button class="btn" ref="twoFloor">2F</button>
  </div>
  <!-- 3D容器 -->
  <div id="container" />
</template>

<script lang="ts" setup>
import { type Ref, ref, onMounted, nextTick } from 'vue'
import { Api3d } from '../utils/api.js'
//@ts-ignore
import whole from '../utils/whole.json'
const twoFloor: Ref<any> = ref(null)
// const devName: Ref<any> = ref('');

onMounted(async () => {
  await nextTick()

  let rootApp = new Api3d()

  console.log('rootApp :>> ', rootApp)
  console.log('whole :>> ', whole)

  rootApp.load(whole)

  rootApp.addEventListener('onPostInit', () => {
    console.log('===========onPostInit================')
  })
  rootApp.addEventListener('onPreFloorClose', () => {
    console.log('===========onPreFloorClose================')
  })
  rootApp.addEventListener('onPostFloorOpen', (e: any) => {
    console.log('===========onPostFloorOpen================', e)
  })

  // rootApp.addEventListener('onClickDev', (e: any) => {
  //   console.log('===========onClickDev================', e);
  //   devName.value = e.dev.name;
  // });
  rootApp.addEventListener('onClickDev', (e: any) => {
    console.log('===========onClickDev================', e)

    const element = document.createElement('div')
    element.style.width = '100px'
    element.style.height = '100px'
    element.style.opacity = '0.75'
    element.style.background = '#ee8888'
    element.style.fontSize = '20px'
    element.textContent = '设备号：' + e.dev.name

    let button = document.createElement('input') // 生成input对象
    button.type = 'button' // 生成input类型
    button.value = '关闭' // 生成input属性value
    button.id = '222' // 赋上id ， 当做参数；

    button.onclick = function () {
      rootApp.del3DByObjName(e.dev.name)
    }

    button.style.opacity = '0.6'
    button.style.background = '#cccccc'
    button.style.fontSize = '20px'
    element.appendChild(button) //将按钮附加到父div中去

    rootApp.createPlane(element, e.dev)
  })

  // twoFloor
  twoFloor.value.addEventListener('click', () => {
    rootApp.floorOpen(2)
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
