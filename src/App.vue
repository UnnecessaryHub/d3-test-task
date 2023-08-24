<script setup lang="ts">

import {getLatestTransactionsQuery} from '@/get-latest-transactions.query'
import {ApolloMiddleware} from '@/shared/apollo'
import {onMounted} from 'vue'
import {ref} from 'vue'



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

const apollo = new ApolloMiddleware()

const fetchQueries = async () => {
  const resource = await apollo.request({
    gql: getLatestTransactionsQuery,
    method: 'swaps'
  }, null, 'query')

  console.log(resource)
}

onMounted(() => {
  fetchQueries()
})

</script>

<template>
  <button @click="connectWallet">connect</button>
</template>
