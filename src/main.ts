import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入公共样式
import './styles/index.scss'
// 引入tailwind样式
import './styles/tailwind.scss'
// 引入字体图标样式
import './assets/iconfont/iconfont'
import './assets/iconfont/iconfont.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
