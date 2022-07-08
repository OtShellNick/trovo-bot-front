module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/button-has-type': [2, {
      button: true,
      submit: true,
      reset: true,
    }],
    'default-param-last': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/*', './src/*'],
          ['@components/*', './src/components/*'],
          ['@assets/*', './src/assets/*'],
          ['@style/*', './src/style/*'],
          ['@containers/*', './src/containers/*'],
          ['@store/*', './store/*'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
