import axios from 'axios'
import _ from 'lodash'
import fp from 'lodash/fp'

import RepositoryDetails from '../models/RepositoryDetails'

// NOTE: Arbitrarily chosen # of repos to query. This should be
//       parameterized and allow pagination.
const NUM_REPOS_TO_ANALYZE = 30

/**
 * Pure function that massages the Docker Hub API response into the
 * format we want to return. e.g., only extracting certain fields;
 * converting snake_case to camelCase, etc.
 */
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
    { params: { page: 1, page_size: NUM_REPOS_TO_ANALYZE } },
  )

  return extractRepositoryDetails(repos)
}
