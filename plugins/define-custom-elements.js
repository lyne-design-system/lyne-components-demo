import Vue from 'vue';

Vue.config.ignoredElements = [new RegExp(`lyne-\w*`)];

export default () => {
  if (process.client) {
    const { defineCustomElements } = require('lyne-test/dist/esm/loader');

    defineCustomElements(window);

  }
};
