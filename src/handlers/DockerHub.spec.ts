import _ from 'lodash'
import fixture from '../../test/fixtures/DockerHubReposFixture'
import { extractRepositoryDetails } from './DockerHub'

describe('DockerHub handler', () => {
  test('extractRepositoryDetails', () => {
    const repositoryDetails = extractRepositoryDetails(fixture)
    expect(repositoryDetails).toHaveLength(35)
    const keys = [
      'description',
      'lastUpdated',
      'name',
      'pullCount',
      'starCount',
    ]
    keys.forEach((key: string) => {
      expect(_.every(repositoryDetails, key))
    })
  })
})
