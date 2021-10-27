const baseConfig = require('lyne-helper-eslint-config');

baseConfig.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
};

baseConfig.globals = {
  console: 'readonly',
  module: 'readonly',
  process: 'readonly',
  require: 'readonly'
};

baseConfig.overrides = [
  {
    files: [
      '*.yaml',
      '*.yml'
    ],
    plugins: ['yaml']
  },
  {
    extends: ['plugin:jsx-a11y/recommended'],
    files: ['*.jsx'],
    plugins: ['jsx-a11y']
  }
];

module.exports = baseConfig;
