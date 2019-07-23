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
    jasmine: true,
    jest: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  rules: {
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'promise/always-return': 'off',
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } },
    ],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
}
