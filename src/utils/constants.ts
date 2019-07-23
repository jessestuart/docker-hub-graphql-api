import { config } from 'dotenv'

config()

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
export const AWS_REGION = process.env.AWS_REGION
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
export const DOCKER_USERNAME = process.env.DOCKER_USERNAME
export const DYNAMODB_TABLE_NAME = process.env.DYNAMODB_TABLE_NAME

export const Constants = {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DOCKER_USERNAME,
  DYNAMODB_TABLE_NAME,
}

// const {
//   AWS_ACCESS_KEY_ID,
//   AWS_SECRET_ACCESS_KEY,
//   DOCKER_USERNAME,
//   DYNAMODB_REGION,
//   DYNAMODB_TABLE_NAME,
// } = process.env

// export const AWS_ACCESS_KEY_ID = AWS_ACCESS_KEY_ID
// export const AWS_SECRET_ACCESS_KEY = AWS_SECRET_ACCESS_KEY
// export const DOCKER_USERNAME = DOCKER_USERNAME
// export const DYNAMODB_REGION = DYNAMODB_REGION
// export const DYNAMODB_TABLE_NAME = DYNAMODB_TABLE_NAME

// export default {
//   AWS_ACCESS_KEY_ID,
//   AWS_SECRET_ACCESS_KEY,
//   DOCKER_USERNAME,
//   DYNAMODB_REGION,
//   DYNAMODB_TABLE_NAME,
// }
