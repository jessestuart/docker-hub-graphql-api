import dotenv from 'dotenv'

dotenv.config()

const {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DOCKER_USERNAME,
  DYNAMODB_TABLE_NAME,
} = process.env

export const Constants = {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DOCKER_USERNAME,
  DYNAMODB_TABLE_NAME,
}
