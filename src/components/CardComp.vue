<template>
  <div class="card">
    <div class="card-header">
      <div>标题</div>
      <div>副标题</div>
    </div>
    <div v-if="content" class="card-content">
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  content: {
    type: String,
    default: '默认内容',
    required: false
  }
})
</script>

<style scoped lang="scss">
$border: #ccc;
.card {
  padding: 10px;
  background-color: red;
  width: 300px;
  border: 1px solid $border;
  border-radius: 3px;
  &:hover {
    box-shadow: 0 0 10px $border;
  }

  &-content {
    padding: 10px;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid $border;
  }
}
</style>
