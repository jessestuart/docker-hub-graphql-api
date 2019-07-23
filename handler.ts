import { queryReposForUser } from './src/services/docker-hub'

// import log from './src/utils/log'

export const hello = async (event, context, callback) => {
  const { topRepos, totalPulls } = await queryReposForUser({
    username: 'jessestuart',
  })
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
