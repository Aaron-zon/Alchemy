import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import './styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
