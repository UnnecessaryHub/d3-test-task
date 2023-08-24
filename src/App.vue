<script setup lang="ts">

import {ApolloMiddleware} from '@/shared/apollo'
import {apolloClient} from '@/shared/config'
import gql from 'graphql-tag'
import {onMounted} from 'vue'
import {ref} from 'vue'


const gqlRequest = gql`
     {
    swaps(first: 5, orderDirection: desc, orderBy:timestamp) {
    caller
    timestamp
    userAddress {
      id
    }
    valueUSD
    tx
  }
}`



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
  const resource = await apolloClient.query({
    query: gqlRequest
  })

  console.log(`SUCCESS`)
  console.log(resource)
}

onMounted(() => {
  fetchQueries()
})



</script>

<template>
  <button @click="connectWallet">connect</button>
</template>
