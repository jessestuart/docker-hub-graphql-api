export const schema = `
  type Query {
    getTopRepos(username: String!): GatsbyNode!
  }

  type GatsbyNode {
    node: GatsbyEdges!
  }

  type GatsbyEdges {
    edges: [DockerHubRepo!]!
  }

  type DockerHubRepo {
    architectures: [Architecture!]
    description: String
    lastUpdated: String!
    name: String!
    pullCount: Int!
    starCount: Int!
  }

  enum Architecture {
    amd64
    arm64
    arm
  }
`

export default schema
