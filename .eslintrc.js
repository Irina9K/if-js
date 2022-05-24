module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'jest-enzyme'],
  plugins: ['babel', 'import', 'react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'off',
    'max-len': ['error', { ignoreComments: true, code: 120 }],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 0,
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
        },
      },
    ],

    'max-classes-per-file': [
      'error',
      { ignoreExpressions: true, max: 2 },
    ],
  },
};
