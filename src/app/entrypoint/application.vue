<script setup lang="ts">
import {Transactions} from '@/widgets/transactions'
import {ConnectWallet} from '@/features/connect-wallet'

</script>

<template>
  <notifications position="bottom right"/>
  <Transactions/>
  <ConnectWallet />
</template>
