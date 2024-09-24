import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/index.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('@/views/error/404.vue'),
    },
  ],
})

export default router
