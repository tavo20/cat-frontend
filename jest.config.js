module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.spec.ts'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    },
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
  };
  