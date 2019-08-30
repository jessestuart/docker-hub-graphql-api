import { ApolloServer } from 'apollo-server'

import resolvers from './resolvers'
import typeDefs from './schema'
import log from './utils/log'

const server = new ApolloServer({
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
})

server
  .listen()
  .then(({ url }) => {
    log.debug(`🚀 Server ready at ${url}`)
  })
  .catch(log.error)
