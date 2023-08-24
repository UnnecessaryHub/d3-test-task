import { createApp } from 'vue'
import VueConnectWallet from 'vue-connect-wallet'

import App from './App.vue'

import './style.css'

const bootstrap = () => {
  const app = createApp(App)
  app.use(VueConnectWallet)

  app.mount('#app')
}

bootstrap()
