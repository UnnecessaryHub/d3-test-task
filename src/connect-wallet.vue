<script lang="ts" setup="">
import {onMounted} from 'vue'
import {ref} from 'vue'

const loading = ref<boolean>(false)

const isMetataskSupported = ref(false)

onMounted(() => {
  if (!('ethereum' in window)){
    console.log('Metatask is not supported.')
    return
  }
  isMetataskSupported.value = true
})

const connectWallet = async () => {
  loading.value = true
  if (!isMetataskSupported) {
    console.log('connectWallet: not supported.')
    loading.value = false
    return
  }

  const accounts = await (window as any).ethereum.request({method: 'eth_requestAccounts'})
  const account = accounts[0]
  loading.value = false
  console.log(account)
}


</script>

<template>
    <v-card-title class="text-h6 text-md-h5
    text-lg-h5 mt-[25px] mb-[25px]">Connect your wallet</v-card-title>
  <div class="max-w-[300px] m-center">
    <v-btn
        :disabled="loading"
        :loading="loading"
        block
        class="text-none mb-4"
        color="indigo-darken-3"
        size="x-large"
        variant="flat"
        @click="connectWallet"
    >
      Verify and continue
    </v-btn>
  </div>
</template>
