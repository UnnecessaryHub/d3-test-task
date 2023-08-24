import { createEffect, createStore } from 'effector'

import { ApolloMiddleware } from '@/shared/apollo'

import { getLatestTransactionsQuery } from './graphql'
import { Transaction } from './types'

export const $transactions = createStore<Transaction[]>([])

export const $showTransition = $transactions.map((state) => state.length > 0)

export const getLatestTransactionsFx = createEffect(async () => {
  const apollo = new ApolloMiddleware()

  const [resource] = await apollo.request<Transaction[]>(
    {
      gql: getLatestTransactionsQuery,
      method: 'swaps'
    },
    null,
    'query'
  )

  return resource
})

$transactions.on(
  getLatestTransactionsFx.doneData,
  (_, transactions) => transactions
)
