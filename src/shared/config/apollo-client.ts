import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'

import { createApolloProvider } from '@vue/apollo-option'

const graphqlUri =
  'https://api.thegraph.com/subgraphs/name/chimpytuts/darkpools-mainarbitrum/graphql'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: graphqlUri

})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})
