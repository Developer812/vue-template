<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
  </div>
  <RouterView />
</template>
<style lang="scss" scoped>
.a {
  width: 100px;
  height: 100px;
}
</style>
