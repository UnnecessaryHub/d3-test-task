import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import vue from '@vitejs/plugin-vue'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    _isDev_: isDev
  },
  build: {
    rollupOptions: {}
  }
})
