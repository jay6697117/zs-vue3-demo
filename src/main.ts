import './assets/main.css'
import { createApp } from 'vue'
import { store } from '@/store'
import useResize from '@/hooks/useResize'

import App from './App.vue'
import router from './router'
import CardComp from '@/components/CardComp.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(useResize)
app.component('CardComp', CardComp)
app.mount('#app')
