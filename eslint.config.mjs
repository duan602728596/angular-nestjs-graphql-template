import { antfu, angular, combine } from '@antfu/eslint-config'

const angularConfigs = await angular()

export default combine(
  antfu({
    imports: {
      overrides: {
        'import/consistent-type-specifier-style': ['off'],
      },
    },
    jsonc: false,
    node: true,
    perfectionist: {
      overrides: {
        'perfectionist/sort-named-imports': ['off'],
      },
    },
    markdown: false,
    stylistic: {
      overrides: {
        'style/brace-style': ['error', '1tbs'],
        'style/multiline-ternary': ['off'],
        'style/quote-props': ['error', 'as-needed'],
        'style/quotes': ['error', 'single', { avoidEscape: true }],
        'style/space-before-function-paren': ['error', {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
          catch: 'always',
        }],
      },
    },
    typescript: {
      parserOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
      },
    },
    rules: {
      'antfu/no-top-level-await': ['off'],
      'no-console': ['off'],
      'prefer-arrow-callback': ['off'],
      'ts/method-signature-style': ['off'],
    },
  }),
  angularConfigs.map((angularConfig) => {
    // 只检查angular项目
    if (angularConfig.files) {
      angularConfig.files[0] = `packages/frontend/${angularConfig.files[0]}`
    }

    // 关闭angular template的注释检查
    if (angularConfig.name === 'antfu/angular/rules/template') {
      angularConfig.rules['style/spaced-comment'] = ['off']
      angularConfig.rules['style/no-multiple-empty-lines'] = ['off']
    }

    return angularConfig
  }),
)
