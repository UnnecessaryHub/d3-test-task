<script lang="ts" setup="">

import {getLatestTransactionsQuery} from './get-latest-transactions.query'
import {ApolloMiddleware} from '@/shared/apollo'
import {ref, onMounted} from 'vue'

export interface Transaction {
  caller: string
  timestamp: number
  tx: string
  userAddress: {
    id: string
  }
  valueUSD: string
  id: string
}

const apollo = new ApolloMiddleware()

const transactions = ref<Transaction[]>([])

const fetchQueries = async () => {
  const [resource] = await apollo.request<Transaction[]>({
    gql: getLatestTransactionsQuery,
    method: 'swaps'
  }, null, 'query')

  transactions.value = resource
}

onMounted(() => {
  fetchQueries()
})

</script>

<template>
  <v-card-title class="text-h6 text-md-h5
    text-lg-h5 mt-[25px] mb-[25px]">5 Latest transactions</v-card-title>
  <v-table>
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
</template>
