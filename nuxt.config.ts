import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  build: {
    transpile: ['lyne-test']
  },

  hooks: {
    'build:done': () => {
      console.log('<<<<<<<<<<<<<<<<<<<<<< xxxxxx hooks build done');
    },
    'render:done': () => {
      console.log('<<<<<<<<<<<<<<<<<<<<<< xxxxxx hooks render  done');
    },
    'render:route': () => {
      console.log('<<<<<<<<<<<<<<<<<<<<<< xxxxxx hooks render  route');
    }
  },

  modules: [
   // '~/modules/hooks'
  ],
  // dev: false,
  // vite: false,
  // target: 'static',
  // ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => ['lyne-button'].includes(tag)
    }
  }
});
