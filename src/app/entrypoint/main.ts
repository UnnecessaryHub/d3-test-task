import { createApp } from 'vue'

import { apolloProvider } from '@/shared/config'
import Notifications from '@kyvg/vue3-notification'

import { vuetifyPlugin } from '../plugins'

import App from './application.vue'

import '../styles/import'

const bootstrap = () => {
  const app = createApp(App)

  app.use(apolloProvider)

  app.use(vuetifyPlugin)
  app.use(Notifications)

  app.mount('#app')
}

bootstrap()
