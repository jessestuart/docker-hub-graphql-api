import _ from 'lodash'

import { queryReposForUser } from './services/docker-hub'
import { popuplateDynamoForRepo } from './services/dynamodb'
import { DOCKER_USERNAME, DYNAMODB_TABLE_NAME } from './utils/constants'
import log from './utils/log'

if (!_.every([DOCKER_USERNAME, DYNAMODB_TABLE_NAME])) {
  log.fatal('Missing required parameters.')
  process.exit(1)
}

queryReposForUser({ username: DOCKER_USERNAME })
  .then(({ topRepos }) => Promise.all(topRepos.map(popuplateDynamoForRepo)))
  .catch(log.error)
