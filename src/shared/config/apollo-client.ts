import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'


import { createApolloProvider } from '@vue/apollo-option'

const graphqlUri =
  'https://api.thegraph.com/subgraphs/name/chimpytuts/darkpools-main-arbitrum'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: graphqlUri,
  // fetchOptions: {
  //   mode: 'no-cors'
  // },
  shouldBatch: true
})

const cache = new InMemoryCache({
  typePolicies: {
    Token: {
      // Singleton types that have no identifying field can use an empty
      // array for their keyFields.
      keyFields: false
    },
    Pool: {
      // Singleton types that have no identifying field can use an empty
      // array for their keyFields.
      keyFields: false
    }
  }
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first'
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all'
    }
  }
})

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})
