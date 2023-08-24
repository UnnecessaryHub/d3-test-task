<script setup lang="ts">

import {onMounted} from 'vue'
import {ref} from 'vue'
import Card from './card.vue'
import ConnectWallet from './connect-wallet.vue'


const isMetataskSupported = ref(false)

onMounted(() => {
  if (!('ethereum' in window)){
    console.log('Metatask is not supported.')
    return
  }
  isMetataskSupported.value = true
})

const connectWallet = async () => {
   if (!isMetataskSupported) {
     console.log('connectWallet: not supported.')
     return
   }

  const accounts = await (window as any).ethereum.request({method: 'eth_requestAccounts'})
  const account = accounts[0]
  console.log(account)
}


</script>

<template>
  <button @click="connectWallet">connect</button>
  <Card/>
</template>
