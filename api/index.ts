import { ApolloServer, gql } from 'apollo-server'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const server = new ApolloServer({
  context: ({ event, context }) => ({
    context,
    event,
    functionName: context.functionName,
    headers: event.headers,
  }),
  resolvers,
  typeDefs,
})

// @ts-ignore
export const handler = server.createHandler()
