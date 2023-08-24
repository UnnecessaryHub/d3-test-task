import { createApp } from 'vue'
import VueConnectWallet from 'vue-connect-wallet'

// import { apolloProvider } from '@/shared/config/apollo-client'

import App from './App.vue'

import './style.css'

const bootstrap = () => {
  const app = createApp(App)
  app.use(VueConnectWallet)
  // app.use(apolloProvider)

  app.mount('#app')
}

bootstrap()
