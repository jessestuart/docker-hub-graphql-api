import { NowRequest, NowResponse } from '@now/node'
import { queryTopRepos } from './handlers/DockerHub'
import { DOCKER_USERNAME } from './utils/constants'
import log from './utils/log'

// export default (request: NowRequest, response: NowResponse) => {
//   const { name = 'World' } = request.query
//   response.status(200).send(`Hello ${name}!`)
// }

// export const hello: APIGatewayProxyHandler = async (event, _context) => {
//   return {
//     body: JSON.stringify(
//       {
//         message:
//           'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2,
//     ),
//     statusCode: 200,
//   }
// }

export default async (_request: NowRequest, response: NowResponse) => {
  log.info(_request)

  if (!DOCKER_USERNAME) {
    log.fatal('Missing required parameters.')
    return response.status(400)
  }

  const topRepos = await queryTopRepos(DOCKER_USERNAME!)

  // const rep = {
  //   body: JSON.stringify(topRepos),
  //   headers: {
  //     'Access-Control-Allow-Credentials': true,
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   statusCode: 200,
  // }

  return response.status(200).send(topRepos)
}
