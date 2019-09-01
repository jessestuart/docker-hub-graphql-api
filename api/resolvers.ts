import {
  DockerHubRepo,
  DockerManifestList,
  fetchManifestList,
  queryTopRepos,
} from 'docker-hub-utils'

const DockerHubRepoResolver = {
  manifestList: async (
    repo: DockerHubRepo,
  ): Promise<DockerManifestList | undefined> => {
    return await fetchManifestList(repo)
  },
}

const Query = {
  repos: async (
    _: unknown,
    query: { username: string },
  ): Promise<DockerHubRepo[]> => {
    const { username } = query
    return await queryTopRepos(username)
  },
}

export default {
  DockerHubRepoResolver,
  Query,
}
