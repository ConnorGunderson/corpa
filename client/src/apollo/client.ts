import { ApolloClient, InMemoryCache } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: new BatchHttpLink({
    uri: '/graphql',
    batchMax: 1000,
    batchInterval: 60,
  }),
  cache,
})

export default client
