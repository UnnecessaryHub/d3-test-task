import gql from 'graphql-tag'

export const getLatestTransactionsQuery = gql`
  {
    swaps(first: 5, orderDirection: desc, orderBy: timestamp) {
      caller
      timestamp
      userAddress {
        id
      }
      valueUSD
      tx
      id
    }
  }
`
