import axios from 'axios'
import _ from 'lodash'
import fp from 'lodash/fp'

import RepositoryDetails from './models/RepositoryDetails'

const DH_API_ROOT = 'https://hub.docker.com/v2/repositories/'

// Arbitrarily chosen # of repos to query.
const NUM_REPOS_TO_ANALYZE = 30
const QUERY_PARAMS = Object.freeze({
  params: {
    page: 1,
    page_size: NUM_REPOS_TO_ANALYZE,
  },
})

const createManifestListURL = ({ repo, username }) => {
  return `https://registry-1.docker.io/v2/${username}/${repo}/manifests/latest`
}

const fetchDockerHubToken = async ({ repo, username }) => {
  const tokenRequest = await axios.get('https://auth.docker.io/token', {
    params: {
      scope: `repository:${username}/${repo}:pull`,
      service: 'registry.docker.io',
    },
  })
  const token = _.get(tokenRequest, 'data.token')
  return token
}

// @ts-ignore
export const extractRepositoryDetails: (
  repos: unknown,
) => RepositoryDetails[] = _.flow(
  fp.get('data.results'),
  fp.map(
    fp.pick([
      'description',
      'last_updated',
      'name',
      'pull_count',
      'star_count',
    ]),
  ),
  fp.map(fp.mapKeys(fp.camelCase)),
)

export const queryTopRepos = async (
  username: string,
): Promise<RepositoryDetails[]> => {
  const repos = await axios.get(`${DH_API_ROOT}${username}`, QUERY_PARAMS)

  const repoDetails = extractRepositoryDetails(repos)
  return Promise.all(
    repoDetails.map(async repo => {
      return {
        ...repo,
        username,
      }
    }),
  )
}

export const fetchManifestList = async (repo): Promise<any> => {
  const { name, username } = repo
  // Docker Hub requires a unique token for each repo manifest queried.
  const token = await fetchDockerHubToken({ repo: name, username })

  const manifestListURL = createManifestListURL({ repo: name, username })
  const manifestList = await axios.get(manifestListURL, {
    headers: {
      Accept: 'application/vnd.docker.distribution.manifest.list.v2+json',
      Authorization: `Bearer ${token}`,
    },
  })

  const architectures = _.flow(
    fp.get('data.manifests'),
    fp.map('platform.architecture'),
  )(manifestList)

  return { architectures }
}

const resolvers = {
  // tslint:disable
  Query: {
    repos: async (_: unknown, args: { username: string }) => {
      const { username } = args
      return await queryTopRepos(username)
    },
  },
  DockerHubRepo: {
    manifest: async (repo: any) => {
      return await fetchManifestList(repo)
    },
  },
}

export default resolvers
