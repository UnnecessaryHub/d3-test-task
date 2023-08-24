import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { apolloProvider } from '@/shared/config'

import App from './App.vue'

import './tailwind.css'
import './style.css'

import 'vuetify/styles'

const bootstrap = () => {
  const app = createApp(App)
  app.use(apolloProvider)
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark'
    }
  })

  app.use(vuetify)

  app.mount('#app')
}

bootstrap()
