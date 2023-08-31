module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue3-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    "customExportConditions": ["node", "node-addons"]
  },
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      useESM: true,
    },
  },
}