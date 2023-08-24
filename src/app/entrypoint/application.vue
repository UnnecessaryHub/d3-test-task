<script setup lang="ts">
import {Transactions} from '@/widgets/transactions'
import {ConnectWallet} from '@/features/connect-wallet'

</script>

<template>
  <notifications position="bottom right"/>
  <div class="container">
    <Transactions/>
    <ConnectWallet />
  </div>
</template>
