import gql from 'graphql-tag'

export const schema = gql`
  type Query {
    repos(username: String!): [DockerHubRepo!]
  }

  type DockerHubRepo {
    username: String!
    description: String
    lastUpdated: String!
    name: String!
    pullCount: Int!
    starCount: Int!
    canEdit: Boolean!
    isAutomated: Boolean!
    isMigrated: Boolean!
    isPrivate: Boolean!
    namespace: String!
    repositoryType: String!
    status: Int!
    manifestList: DockerManifestList
  }

  type DockerManifestList {
    manifests: [DockerManifest!]
    mediaType: String
    schemaVersion: Int!
  }

  type DockerManifest {
    digest: String!
    mediaType: String!
    platform: Platform!
    schemaVersion: Int
  }

  type Platform {
    os: String!
    architecture: Architecture!
  }

  enum Architecture {
    amd64
    arm
    arm64
  }
`

export default schema
