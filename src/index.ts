import { APIGatewayProxyHandler } from 'aws-lambda'
import { queryTopRepos } from './handlers/DockerHub'
import { DOCKER_USERNAME } from './utils/constants'
import log from './utils/log'

if (!DOCKER_USERNAME) {
  log.fatal('Missing required parameters.')
  process.exit(1)
}

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    body: JSON.stringify(
      {
        message:
          'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
    statusCode: 200,
  }
}

export const queryDockerHub: APIGatewayProxyHandler = async (
  event: unknown,
  _context: unknown,
) => {
  if (!DOCKER_USERNAME) {
    log.fatal('Missing required parameters.')
    process.exit(1)
  }

  const topRepos = await queryTopRepos(DOCKER_USERNAME!)

  const response = {
    body: JSON.stringify({ message: { topRepos }, input: event }),
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
  }

  return response
}
