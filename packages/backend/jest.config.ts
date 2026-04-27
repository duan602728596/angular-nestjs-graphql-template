import { join } from 'node:path';
import { cwd } from 'node:process';
import { defineConfig } from 'jest';

export default defineConfig({
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.m?(t|j)s$': ['ts-jest', {
      useESM: true,
      tsconfig: join(cwd(), 'tsconfig.json')
    }]
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.m?js$': '$1'
  },
  moduleFileExtensions: [
    'ts',
    'mts',
    'js',
    'mjs',
    'json'
  ],

  rootDir: 'src',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.m?ts$',

  collectCoverageFrom: [
    '**/*.service.(t|j)s',
    '**/*.service.m(t|j)s'
  ],
  coverageDirectory: join(cwd(), '.nest/test/coverage')
});