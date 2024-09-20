<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'
let time = ref()
setInterval(() => {
  time.value = dayjs().format('YYYY-MM-DD hh:mm:ss')
}, 1000)
</script>

<template>
  <div>{{ time }}</div>
</template>
