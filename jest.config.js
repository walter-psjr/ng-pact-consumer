module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.pact.spec.ts'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.spec.json',
    }
  }
};
