import axios from 'axios'
import _ from 'lodash'
import fp from 'lodash/fp'

import RepositoryDetails from '../types/RepositoryDetails'

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

export const queryReposForUser = async ({
  username,
}): Promise<DHStatsReponse> => {
  const repos = await axios.get(
    `https://hub.docker.com/v2/repositories/${username}`,
    QUERY_PARAMS,
  )
  const topRepos: RepositoryDetails[] = _.flow(
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
  )(repos) as RepositoryDetails[]

  const totalPulls: number = _.sumBy(topRepos, 'pull_count')

  return { topRepos, totalPulls }
}
