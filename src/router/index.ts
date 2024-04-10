import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      // redirect: '/home'
      // redirect:'/demo'
      // redirect: '/water'
      // redirect: '/model'
      // redirect: '/provide'
      // redirect: '/dynamic'
      // redirect: '/slot'
      // redirect: '/keepAlive'
      // redirect: '/hooks'
      redirect: '/tsx'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/DemoView.vue')
    },
    {
      path: '/water',
      name: 'water',
      component: () => import('@/views/WaterView.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('@/views/ModelView.vue')
    },
    {
      path: '/provide',
      name: 'provide',
      component: () => import('@/views/ProvideView.vue')
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('@/views/DynamicView.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('@/views/SlotView.vue')
    },
    {
      path: '/keepAlive',
      name: 'keepAlive',
      component: () => import('@/views/KeepAliveView.vue')
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: () => import('@/views/HooksView.vue')
    },
    {
      path: '/tsx',
      name: 'tsx',
      component: () => import('@/views/TsxView.tsx')
    }
  ]
})

export default router
