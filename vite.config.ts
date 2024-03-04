import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: 'src/views',
      exclude: ['**/components/*.vue'],
      extensions: ['.vue'],
    }),
    vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
