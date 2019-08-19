import { ApolloServer } from 'apollo-server'

import { resolvers } from './resolvers'
import typeDefs from './schema'

const server = new ApolloServer({
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
