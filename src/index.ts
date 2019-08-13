import { queryTopRepos } from './handlers/DockerHub'
import { DOCKER_USERNAME } from './utils/constants'
import log from './utils/log'

if (!DOCKER_USERNAME) {
  log.fatal('Missing required parameters.')
  process.exit(1)
}

export const queryDockerHub = async (event, context, callback) => {
  // @ts-ignore
  const { topRepos, totalPulls } = await queryTopRepos(DOCKER_USERNAME)

  const response = {
    body: JSON.stringify({ topRepos, totalPulls }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    statusCode: 200,
  }

  return callback(null, response)
}
// .then(({ topRepos }) => Promise.all(topRepos.map(popuplateDynamoForRepo)))
