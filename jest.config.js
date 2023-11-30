/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/tmp/jest_rs",

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/mocks/fileMock.js',
  },
  //specify testing enviornment for tests to run
  //need to test dom manipulation
  testEnvironment: 'jsdom', //javascript document object model

  testMatch: ['**/tests/**/*.[j]s?(x)', '**/?(*.)+(spec|test).[j]s?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  //specify how certain files should be transformed before they are tested
  transform: {
    '^.+\\.jsx?$': 'babel-jest', //transform any js or jsx file with babel-jest
    '^.+\\.scss$': 'jest-transform-stub', //transform scss with jest-transform-stub
  },

  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$', '\\.jpeg$'],

  verbose: true,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};

module.exports = config;
