export const schema = `
  type Query {
    allDockerHubRepo(username: String!): GatsbyEdges!
  }

  type GatsbyNode {
    node: [DockerHubRepo!]!
  }

  type GatsbyEdges {
    edges: GatsbyNode!
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
    arm
    arm64
  }
`

export default schema
