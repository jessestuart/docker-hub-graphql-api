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
    log.info(`🚀 Docker Hub GraphQL API ready at ${url}`)
    return
  })
  .catch(log.error)
