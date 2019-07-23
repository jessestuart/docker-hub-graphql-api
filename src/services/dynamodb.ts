import {
  DynamoDB,
  UpdateItemInput,
  UpdateItemOutput,
} from '@aws-sdk/client-dynamodb-node'
import _ from 'lodash'

import RepositoryDetails from '../types/RepositoryDetails'
import {
  AWS_REGION,
  DOCKER_USERNAME,
  DYNAMODB_TABLE_NAME,
} from '../utils/constants'
import log from '../utils/log'

const client = new DynamoDB({
  endpoint: 'http://localhost:8000',
  region: AWS_REGION,
})

const formatExpressionAttributeValues = ({
  last_updated,
  pull_count,
  star_count,
}) => ({
  ':last_updated': {
    S: last_updated,
  },
  ':pull_count': {
    N: _.toString(pull_count),
  },
  ':star_count': {
    N: _.toString(star_count),
  },
})

export const popuplateDynamoForRepo = async (
  repo: RepositoryDetails,
): Promise<UpdateItemOutput> => {
  const { description, last_updated, name, pull_count, star_count } = repo

  log.info(
    { last_updated, pull_count, repo: `${DOCKER_USERNAME}/${name}` },
    'Updating DynamoDB item.',
  )

  let UpdateExpression = `set STAR_COUNT=:star_count,
    PULL_COUNT=:pull_count,
    LAST_UPDATED=:last_updated`

  const ExpressionAttributeValues = formatExpressionAttributeValues({
    last_updated,
    pull_count,
    star_count,
  })

  if (!_.isEmpty(description)) {
    UpdateExpression += ', DESCRIPTION=:description'
    ExpressionAttributeValues[':description'] = { S: description }
  }

  const params: UpdateItemInput = {
    ExpressionAttributeValues,
    Key: {
      NAME: {
        S: name,
      },
    },
    TableName: DYNAMODB_TABLE_NAME!,
    UpdateExpression,
  }

  try {
    return await client.updateItem(params)
  } catch (err) {
    return Promise.reject(err)
  }
}
