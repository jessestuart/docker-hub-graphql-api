import {
  DockerHubRepo,
  DockerManifestList,
  fetchManifestList,
  queryRepo,
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
  lastUpdatedSince?: DateTime
}

const Query = {
  repo: (
    __: unknown,
    query: QueryProps & { name: string },
  ): Promise<DockerHubRepo | undefined> => {
    const { name, username } = query
    return queryRepo({ name, user: username })
  },
  repos: (__: unknown, query: QueryProps): Promise<DockerHubRepo[]> => {
    const { lastUpdatedSince, username } = query
    return queryTopRepos({
      lastUpdatedSince,
      user: username,
    })
  },
}

export default {
  DateTime: DateTimeType,
  DockerHubRepo: DockerHubRepoResolver,
  Query,
}
