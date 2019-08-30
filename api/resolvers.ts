import {
  DockerHubRepo,
  fetchManifestList,
  queryTopRepos,
} from 'docker-hub-utils'
import _ from 'lodash'

const resolvers = {
  // tslint:disable
  Query: {
    repos: async (
      _: unknown,
      args: { username: string },
    ): Promise<DockerHubRepo[]> => {
      const { username } = args
      return await queryTopRepos(username)
    },
  },
  DockerHubRepo: {
    manifestList: async (repo: DockerHubRepo) => {
      return await fetchManifestList(repo)
    },
  },
}

export default resolvers
