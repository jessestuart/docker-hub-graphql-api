// declare module '*.graphql' {
//   import { DocumentNode } from 'graphql'
//   const Schema: DocumentNode

//   export = Schema
// }

declare module '*.graphql' {
  const value: any
  export default value
}

// declare module '*.graphql' {
//   import { DocumentNode } from 'graphql'

//   const value: DocumentNode
//   export default value
// }
