import {
  DockerHubRepo,
  DockerManifestList,
  fetchManifestList,
  queryTopRepos,
} from 'docker-hub-utils'
import DateTimeType from './scalars/DateTime'

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
    query: { username: string; lastUpdatedSince?: string | number },
  ): Promise<DockerHubRepo[]> => {
    const { username } = query
    return await queryTopRepos(username)
  },
}

export default {
  DateTime: DateTimeType,
  DockerHubRepo: DockerHubRepoResolver,
  Query,
}
