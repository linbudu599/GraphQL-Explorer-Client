module.exports = {
  testURL: 'http://localhost:8000',
  testEnvironment: './tests/PuppeteerEnvironment',
  verbose: false,
  extraSetupFiles: ['./tests/setupTests.js'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: false,
    localStorage: null,
  },
  collectCoverage: true,
  // collectCoverageFrom: ['./client/src/components/*.tsx'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  notify: true,
  preset: 'ts-jest',
  runner: 'jest-runner',
  setupFiles: ['./jest.setup.ts'],
  setupFilesAfterEnv: ['jest-enzyme', '<rootDir>jest.setup.ts'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  maxWorkers: '80%',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    // waiting for alias configuration on Parcel & TS
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  // TODO: config by env variables dynamically
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  // testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  testRunner: 'jasmine2',
  timers: 'real',
  transform: { '\\.tsx?$': 'ts-jest' },
};
