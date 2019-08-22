import dotenv from 'dotenv'

dotenv.config()

export const { DOCKER_USERNAME } = process.env

export const Constants = {
  DOCKER_USERNAME,
  DOCKER_HUB_API_ROOT: 'https://hub.docker.com/v2/',
}
