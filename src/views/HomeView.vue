<script setup lang="ts">
const treeData = ref({
  name: 'My Tree',
  children: [
    { name: 'child folder-1' },
    { name: 'child folder-2' },
    {
      name: 'child folder-3',
      children: [
        {
          name: 'child folder-31',
          children: [{ name: 'child folder-311' }, { name: 'child folder-312' }]
        },
        { name: 'child folder-32' },
        { name: 'child folder-33' },
        {
          name: 'child folder-34',
          children: [{ name: 'child folder-341' }, { name: 'child folder-342' }]
        }
      ]
    }
  ]
})

</script>

<template>
  <div class="home">
    <!-- <ShowComp /> -->
    <!-- <CardComp content="111" /> -->
    <MyTree :data="treeData" />
  </div>
</template>
