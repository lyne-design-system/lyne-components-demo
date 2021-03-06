export default {
  components: true,
  css: ['lyne-test/dist/lyne-components/lyne-components.css'],
  head: {
    htmlAttrs: {
      lang: 'en',
      mode: 'shared'
    },
    link: [
      {
        href: '/favicon.png',
        rel: 'icon',
        type: 'image/x-icon'
      }
    ],
    meta: [
      {
        charset: 'utf-8'
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport'
      },
      {
        content: '',
        hid: 'description',
        name: 'description'
      },
      {
        content: 'telephone=no',
        name: 'format-detection'
      }
    ],
    title: 'lyne-components-demo'
  },
  loading: false,
  loadingIndicator: false,
  modules: ['~/modules/stencil-render'],
  plugins: ['~/plugins/define-custom-elements'],
  target: 'static'
};
