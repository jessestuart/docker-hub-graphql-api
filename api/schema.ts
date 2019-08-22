import gql from 'graphql-tag'

export const schema = gql`
  type Query {
    repos(username: String!): [DockerHubRepo!]
  }

  type DockerHubRepo {
    manifest: DockerManifest
    username: String!
    description: String
    lastUpdated: String!
    name: String!
    pullCount: Int!
    starCount: Int!
  }

  type DockerManifest {
    architectures: [Architecture!]
  }

  enum Architecture {
    amd64
    arm
    arm64
  }
`

export default schema
