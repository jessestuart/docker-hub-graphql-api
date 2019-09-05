import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'

import resolvers from './resolvers'
import log from './utils/log'

const typeDefs = importSchema(__dirname + '/schema.graphql')

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
