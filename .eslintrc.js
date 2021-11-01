const baseConfig = require('lyne-helper-eslint-config');

baseConfig.globals = {
  module: 'readonly',
  process: 'readonly',
  require: 'readonly'
};

baseConfig.plugins = ['yaml'];

baseConfig.overrides = [
  {
    extends: ['plugin:jsx-a11y/recommended'],
    files: ['*.jsx'],
    plugins: ['jsx-a11y']
  }
];

module.exports = baseConfig;
