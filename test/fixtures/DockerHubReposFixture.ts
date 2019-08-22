const DockerHubReposJSON = [
  {
    description: 'OwnTracks. Multiarch. 👌',
    name: 'owntracks',
    pullCount: 488928,
    starCount: 3,
  },
  {
    description:
      "The every(wo)man's reverse proxy, on all your boxes or boards. amd64, arm64, & armhf nightly builds.",
    name: 'caddy',
    pullCount: 363037,
    starCount: 1,
  },
  {
    description:
      'Nightly multi-architecture (amd64, arm64, armv7) builds for the Kubernetes Helm tiller service.',
    name: 'tiller',
    pullCount: 334292,
    starCount: 10,
  },
  {
    description:
      'All the dependencies, up-to-date, all the time. Nightly multiarch builds. (amd64 + arm64)',
    name: 'renovate',
    pullCount: 143411,
    starCount: 0,
  },
  {
    description:
      'Minio server — supports arm (arm32v6, arm32v7, armhf) arm64 (aarch64), and amd64 architectures.',
    name: 'minio',
    pullCount: 74819,
    starCount: 3,
  },
  {
    description:
      'An OSS metrics dashboard and graph editor for Graphite, Elasticsearch, Prometheus and InfluxDB.',
    name: 'grafana',
    pullCount: 52737,
    starCount: 1,
  },
  {
    description: 'amd64, arm64, and armhf Docker images for Minio Client.',
    name: 'mc',
    pullCount: 45199,
    starCount: 0,
  },
  {
    description:
      'Multiarch (ARM, ARM64, AMD64) fluent-bit image. Nightly builds from master. Telemetry FTW.',
    name: 'fluent-bit',
    pullCount: 38773,
    starCount: 3,
  },
  {
    description:
      'Multi-arch (AMD, ARM, ARM64) image for scraping data from a Unifi controller.',
    name: 'unifi_exporter',
    pullCount: 37002,
    starCount: 0,
  },
  {
    description:
      'Nightly multiarch (arm64, armhf, amd64) builds of Heptio Velero for Kubernetes.',
    name: 'velero',
    pullCount: 36417,
    starCount: 1,
  },
  {
    description:
      "Nightly multiarch (arm64, armhf, amd64) builds of Heptio's ark.",
    name: 'ark',
    pullCount: 23236,
    starCount: 2,
  },
  {
    description:
      'A local PV represents a local disk directly-attached to a Node. This reached GA in 1.14.',
    name: 'kube-local-volume-provisioner',
    pullCount: 17476,
    starCount: 1,
  },
  {
    description:
      'kube2iam provides different AWS IAM roles for pods running on Kubernetes.\n Nightly multiarch builds.',
    name: 'kube2iam',
    pullCount: 11239,
    starCount: 0,
  },
  {
    description: '',
    name: 'elasticsearch_exporter',
    pullCount: 10668,
    starCount: 0,
  },
  {
    description: '',
    name: 'docker-hub-exporter',
    pullCount: 8596,
    starCount: 0,
  },
  {
    description: '',
    name: 'consul',
    pullCount: 5189,
    starCount: 0,
  },
  {
    description: '',
    name: 'homemaker',
    pullCount: 4527,
    starCount: 0,
  },
  {
    description: '',
    name: 'lmsensors_exporter',
    pullCount: 3293,
    starCount: 0,
  },
  {
    description: '',
    name: 'pihole_exporter',
    pullCount: 3271,
    starCount: 0,
  },
  {
    description: '',
    name: 'prometheus-operator',
    pullCount: 3147,
    starCount: 0,
  },
  {
    description: '',
    name: 'fluent-bit-builder',
    pullCount: 2826,
    starCount: 0,
  },
  {
    description:
      'Caddy w/ Cloudflare plugin included. [NOTE: use jessestuart/caddy instead for nightly builds!] ',
    name: 'caddy-cloudflare',
    pullCount: 2824,
    starCount: 0,
  },
  {
    description: '',
    name: 'vagrant-build-base',
    pullCount: 2509,
    starCount: 0,
  },
  {
    description: '',
    name: 'prometheus-config-reloader',
    pullCount: 2063,
    starCount: 0,
  },
  {
    description: '',
    name: 'node_exporter',
    pullCount: 1852,
    starCount: 0,
  },
  {
    description: '',
    name: 'helm-exporter',
    pullCount: 1528,
    starCount: 0,
  },
  {
    description: '',
    name: 'elasticsearch-kubernetes',
    pullCount: 1007,
    starCount: 0,
  },
  {
    description: '',
    name: 'adguard-home',
    pullCount: 713,
    starCount: 0,
  },
  {
    description: '',
    name: 'drone-server',
    pullCount: 630,
    starCount: 0,
  },
  {
    description: '',
    name: 'docker-registry',
    pullCount: 621,
    starCount: 0,
  },
  {
    description: '',
    name: 'jenkins',
    pullCount: 571,
    starCount: 0,
  },
  {
    description: '',
    name: 'jesses.io',
    pullCount: 527,
    starCount: 0,
  },
  {
    description: '',
    name: 'pihole-exporter',
    pullCount: 519,
    starCount: 0,
  },
  {
    description: '',
    name: 'alpine-essentials',
    pullCount: 420,
    starCount: 0,
  },
  {
    description: '',
    name: 'arm_exporter',
    pullCount: 255,
    starCount: 0,
  },
]

// Hardcord `lasteUpdate` field to "now" so we have deterministic data
// (e.g., it won't get filtered out in the RepoList component).
const now = new Date()

const DockerHubReposFixture = DockerHubReposJSON.map((fixture, index) => ({
  ...fixture,
  lastUpdated: now,
}))

export default { data: { results: DockerHubReposFixture } }
