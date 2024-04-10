<template>
  <div class="hooks-view" v-resize="handleResize">
    <!-- <img class="image1" :src="url1" alt="logo" />
    <hr>
    <img class="image2" :src="url2" alt="logo" /> -->
  </div>
</template>

<script lang="ts" setup>
// import useQRCode from '@/hooks/useQRCode'
// import useToBase64 from '@/hooks/useToBase64'
// const state = useQRCode('hello world')
// const url1 =
//   'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
// const url2 = ref('')
// ;(async () => {
//   const { Baseurl } = await useToBase64({ el: '.hooks-view > .image1' })
//   url2.value = Baseurl || ''
//   console.log('Baseurl :>> ', Baseurl)
// })()
const handleResize = (content: any) => {
  console.log('resize',content)
}
</script>

<style lang="scss" scoped>
.hooks-view {
  box-sizing: border-box;
  // padding: 20px 15px 0;
  background-color: #ccc;
  width: 100%;
  height: 100%;

  img {
    width: 400px;
    height: 300px;
  }
}
</style>
