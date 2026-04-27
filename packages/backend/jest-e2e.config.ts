import { defineConfig } from 'jest';
import jestConfig from './jest.config.ts';

export default defineConfig({
  ...jestConfig,
  rootDir: 'test',
  testRegex: '.*\\.e2e-spec\\.m?ts$'
});
