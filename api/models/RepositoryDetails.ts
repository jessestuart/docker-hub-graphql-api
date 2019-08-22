export type Architecture = 'amd64' | 'arm64' | 'arm'

export default interface RepositoryDetails {
  description?: string
  lastUpdated: string
  manifest?: Architecture[]
  name: string
  pullCount: number
  starCount: number
}
