<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'
let time = ref()
setInterval(() => {
  time.value = dayjs().format('YYYY-MM-DD hh:mm:ss')
}, 1000)
</script>

<template>
  <el-table mb-1 :data="[]" />
</template>

<style lang="scss" scoped>
.iconify {
  font-size: 20px; /* 调整图标的大小 */
  color: #ff5733; /* 调整图标的颜色 */
}
</style>
