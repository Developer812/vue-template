<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed, ref } from 'vue'

import '@/components/MIconify/src/config'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const currentLocale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <RouterView />
  </el-config-provider>
</template>
