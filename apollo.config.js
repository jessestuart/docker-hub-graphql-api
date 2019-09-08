module.exports = {
  client: {
    service: 'jessestuart-9997',
    includes: ['./api/**/*.ts'],
  },
  service: {
    localSchemaFile: './api/schema.graphql',
  },
}
