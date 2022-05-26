module.exports = {
  plugins: ['cypress'],
  env: {
    browser: true,
    es6: true,
    node: true,
    'cypress/globals': true,
  },
  extends: ['plugin:cypress/recommended', 'eslint:recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'arrow-parens': 'off',
    'implicit-arrow-linebreak': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'object-shorthand': [1, 'properties'],
    'no-var': 'error',
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    semi: [2, 'never'],
    'comma-dangle': [2, 'always-multiline'],
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
  },
}
