module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'graphql', 'import', 'prettier', 'promise'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        parser: 'typescript',
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['off'],
  },
}
