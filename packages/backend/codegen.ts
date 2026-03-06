import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'graphql/schema.gql',
  generates: {
    'graphql/schema.d.ts': {
      plugins: [
        'typescript',
        'typescript-operations'
      ],
      config: {
        enumsAsTypes: true,
        skipTypename: true
      }
    }
  }
};

export default config;