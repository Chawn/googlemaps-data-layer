// eslint-disable-next-line no-undef
module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'jest': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'error',
    'avoidEscape': 0,
    'no-duplicate-imports': 'error',
  },
}
