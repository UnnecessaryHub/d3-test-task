<script lang="ts" setup="">

import {useStore} from '@/shared/hooks'
import {computed} from 'vue'
import {$showTransition} from './model'
import {getLatestTransactionsFx, $transactions} from './model'
import {onMounted} from 'vue'
import {Title} from '@/shared/ui/title'

const transactions = useStore($transactions)
const showTransition = useStore($showTransition)

onMounted(() => {
  getLatestTransactionsFx()
})


</script>

<template>
  <v-scroll-x-transition>
    <Title v-show="showTransition">
      5 Latest transactions
    </Title>
  </v-scroll-x-transition>
  <v-scroll-x-transition>
    <v-table  v-show="showTransition">
      <thead>
      <tr>
        <th class="text-left">
          Timestamp
        </th>
        <th class="text-left">
          Amount
        </th>
        <th class="text-left">
          Caller
        </th>
        <th class="text-left">
          Receiver
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in transactions"
          :key="item.id"
      >
        <td>{{ item.timestamp }}</td>
        <td>{{ parseInt(item.valueUSD).toFixed(0)}} $</td>
        <td>{{ item.caller }}</td>
        <td>{{ item.userAddress.id }}</td>
      </tr>
      </tbody>
    </v-table>
  </v-scroll-x-transition>
</template>
