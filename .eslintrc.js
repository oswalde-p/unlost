module.exports = {
  'env': {
      'browser': true,
      'commonjs': true,
      'es6': true
  },
  'extends': 'eslint:recommended',
  'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly'
  },
  'parser': 'babel-eslint',
  'parserOptions': {
      'ecmaVersion': 2018,
      'ecmaFeatures': {
          'jsx': true
      },
      'sourceType': 'module'
  },
  'rules': {
      'indent': [
          'error',
          2
      ],
      'linebreak-style': [
          'error',
          'unix'
      ],
      'quotes': [
          'error',
          'single'
      ],
      'semi': [
          'error',
          'never'
      ],
      'no-console': 'off',
      'no-trailing-spaces' : [
          'error'
      ]
  }
}
