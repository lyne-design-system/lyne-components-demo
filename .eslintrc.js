const baseConfig = require('lyne-helper-eslint-config');

baseConfig.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module'
};

baseConfig.globals = {
  module: 'readonly',
  require: 'readonly'
};

baseConfig.overrides = [
  {
    extends: ['plugin:jsx-a11y/recommended'],
    files: ['*.jsx'],
    plugins: ['jsx-a11y']
  }
];

module.exports = baseConfig;
