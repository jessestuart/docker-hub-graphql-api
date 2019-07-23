import axios from 'axios'
import _ from 'lodash'
import fp from 'lodash/fp'

import RepositoryDetails from '../types/RepositoryDetails'

// Arbitrarily chosen # of repos to query.
const NUM_REPOS_TO_ANALYZE = 30
const QUERY_PARAMS = Object.freeze({
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
  },
  params: {
    page: 1,
    page_size: NUM_REPOS_TO_ANALYZE,
  },
})

// @ts-ignore
export const extractRepositoryDetails: (
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

export const queryTopRepos = async (
  username: string,
): Promise<RepositoryDetails[]> => {
  const repos = await axios.get(
    `https://hub.docker.com/v2/repositories/${username}`,
    QUERY_PARAMS,
  )

  return extractRepositoryDetails(repos)
}
