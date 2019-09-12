import {
  DockerHubRepo,
  DockerManifestList,
  fetchManifestList,
  queryTags,
  queryTopRepos,
  Tag,
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
  tags: async (repo: DockerHubRepo): Promise<Tag[] | undefined> => {
    try {
      return await queryTags(repo)
    } catch (err) {
      log.error(err)
      return
    }
  },
}

interface QueryProps {
  username: string
  name?: string
  lastUpdatedSince?: DateTime
}

const Query = {
  repos: (__: unknown, query: QueryProps): Promise<DockerHubRepo[]> => {
    const { lastUpdatedSince, name, username } = query
    return queryTopRepos({
      lastUpdatedSince,
      name,
      user: username,
    })
  },
}

export default {
  DateTime: DateTimeType,
  DockerHubRepo: DockerHubRepoResolver,
  Query,
}
