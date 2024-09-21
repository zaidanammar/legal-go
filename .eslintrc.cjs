/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: [
    'import',
    'lodash',
    'no-relative-import-paths',
    'jsx-a11y',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended-legacy',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.app.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent'],
          ['sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: true,
        rootDir: 'src',
        prefix: '@',
      },
    ],
    complexity: 'warn',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'max-params': [
      'error',
      {
        max: 3,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'lodash/import-scope': ['error', 'method'],
  },
  overrides: [
    {
      files: [
        '**/constants/**/*',
        '**/services/**/*',
        '**/types/**/*',
        '**/utils/**/*',
      ],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
        ],
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      plugins: ['vitest'],
      extends: ['plugin:vitest/legacy-recommended'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'vitest/prefer-strict-equal': 'error',
        'vitest/prefer-todo': 'error',
        'vitest/prefer-spy-on': 'error',
        'vitest/prefer-mock-promise-shorthand': 'error',
        'vitest/prefer-expect-resolves': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/valid-expect': 'error',
        'vitest/consistent-test-it': [
          'error',
          {
            fn: 'it',
            withinDescribe: 'test',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'default',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
            leadingUnderscore: 'allow',
          },
        ],
      },
    },
    {
      files: ['**/app-views/**/index.tsx', 'src/lib/**/**/index.tsx', '**.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/app-views/**/components/**/*.tsx'],
      rules: {
        'import/no-default-export': 'error',
      },
    },
  ],
  ignorePatterns: ['src/assets/less/*'],
};
