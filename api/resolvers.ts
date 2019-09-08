import {
  DockerHubRepo,
  DockerManifestList,
  fetchManifestList,
  queryTopRepos,
} from 'docker-hub-utils'
import { DateTime } from 'luxon'
import DateTimeType from './scalars/DateTime'
import log from './utils/log'

const DockerHubRepoResolver = {
  manifestList: async (
    repo: DockerHubRepo,
  ): Promise<DockerManifestList | undefined> => {
    try {
      return await fetchManifestList(repo)
    } catch (err) {
      log.error(err)
      return
    }
  },
}

interface QueryProps {
  username: string
  lastUpdatedSince?: DateTime | undefined
}

const Query = {
  repos: async (_: unknown, query: QueryProps): Promise<DockerHubRepo[]> => {
    const { username, lastUpdatedSince } = query
    return queryTopRepos({ user: username, lastUpdatedSince })
  },
}

export default {
  DateTime: DateTimeType,
  DockerHubRepo: DockerHubRepoResolver,
  Query,
}
