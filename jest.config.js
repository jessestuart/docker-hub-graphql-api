module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './test/coverage',
  moduleFileExtensions: ['js', 'ts'],
  moduleDirectories: ['src', 'static', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  reporters: ['default', 'jest-junit'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: ['node_modules'],
}
