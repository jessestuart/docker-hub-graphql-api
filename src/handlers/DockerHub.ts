import axios from 'axios'
import _ from 'lodash'
import fp from 'lodash/fp'

import RepositoryDetails from '../types/RepositoryDetails'

// Arbitrarily chosen # of repos to query.
const NUM_REPOS_TO_ANALYZE = 35
const QUERY_PARAMS = Object.freeze({
  params: {
    page: 1,
    page_size: NUM_REPOS_TO_ANALYZE,
  },
})

export interface DHStatsReponse {
  topRepos: RepositoryDetails[]
  totalPulls: number
}

// @ts-ignore
const extractRepositoryDetails: (
  repos: unknown,
) => RepositoryDetails[] = _.flow(
  fp.get('data.results'),
  fp.map(
    fp.pick([
      'description',
      'last_updated',
      'name',
      'pull_count',
      'star_count',
    ]),
  ),
  fp.map(fp.mapKeys(fp.camelCase)),
)

export const queryTopRepos = async (username: string) => {
  const repos = await axios.get(
    `https://hub.docker.com/v2/repositories/${username}`,
    QUERY_PARAMS,
  )
  const topRepos: RepositoryDetails[] = extractRepositoryDetails(repos)
  const totalPulls: number = _.sumBy(topRepos, 'pullCount')

  return { topRepos, totalPulls }
}
