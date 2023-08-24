import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const graphqlUri =
  'https://api.thegraph.com/subgraphs/name/chimpytuts/darkpools-mainarbitrum/graphql'

const httpLink = createHttpLink({
  uri: graphqlUri
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})
