import _ from 'lodash'

import { queryReposForUser } from './src/services/docker-hub'
import log from './src/utils/log'

export const queryDockerHubTopRepos = async (event, context, callback) => {
  const { topRepos, totalPulls } = await queryReposForUser({
    username: 'jessestuart',
  })
  log.info(
    { numRepos: _.size(topRepos) },
    'Successfully retrieved top repositories for user.',
  )
  // await Promise.all(topRepos.map(popuplateDynamoForRepo))

  const response = {
    body: {
      topRepos,
      totalPulls,
    },
    statusCode: 200,
  }

  callback(null, response)
}
