<template>
  <div v-if="props.modelValue" class="dialog">
    <div class="dialog-header">
      <input type="text" :value="props.title" @change="handleTitleInput" />
      <div @click="handleClose">x</div>
    </div>
    <div class="dialog-content">
      <input type="text" :value="props.content" @change="handleContentInput" />
      <div>子open:{{ props.modelValue }}</div>
      <div>子close:{{ props.close }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  modelValue: boolean
  close: boolean
  title: string
  content: string
  titleModifiers?: {
    default: () => {}
  }
  contentModifiers?: {
    default: () => {}
  }
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  close: true,
  title: '',
  content: ''
})
watch(
  () => props.title,
  (newValue) => {
    console.log('watch title newValue :>> ', newValue)
  },
  {
    immediate: true
  }
)
watch(
  () => props.content,
  (newValue) => {
    console.log('watch content newValue :>> ', newValue)
  },
  {
    immediate: true
  }
)

console.log('props :>> ', props)
const emits = defineEmits(['update:modelValue', 'update:close', 'update:title', 'update:content'])

const handleClose = () => {
  emits('update:modelValue', false)
  emits('update:close', true)
}

const init = () => {
  emits('update:title', props.title.toUpperCase())
  emits('update:content', props.content.toLowerCase())
}

init()

const handleTitleInput = (e: any) => {
  let val = e.target.value
  console.log('val :>> ', val)
  if (props.titleModifiers) {
    val = val.toUpperCase()
  }
  emits('update:title', val)
}

const handleContentInput = (e: any) => {
  let val = e.target.value
  console.log('val :>> ', val)
  if (props.contentModifiers) {
    val = val.toLowerCase()
  }
  emits('update:content', val)
}
</script>

<style lang="scss" scoped>
.dialog {
  background-color: #eee;
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  &-content {
    padding: 10px;
  }
}
</style>
