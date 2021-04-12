module.exports = {
  roots: [
    '<rootDir>/pages',
    '<rootDir>/src'
  ],
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
