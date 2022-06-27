import Vue from 'vue';

Vue.config.ignoredElements = [new RegExp('sbb-*', 'u')];

export default () => {
  if (process.client) {
    const {
      defineCustomElements
    } = require('@sbb-esta/lyne-components/dist/esm/loader');

    defineCustomElements(window);

  }
};
