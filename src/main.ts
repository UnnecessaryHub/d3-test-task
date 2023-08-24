import { createApp } from 'vue'

import { apolloProvider } from '@/shared/config'

import App from './App.vue'

import './style.css'

const bootstrap = () => {
  const app = createApp(App)
  app.use(apolloProvider)

  app.mount('#app')
}

bootstrap()
