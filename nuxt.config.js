export default {
  components: true,
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        href: '/favicon.ico',
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
  modules: ['~/modules/stencil-render'],
  plugins: ['~/plugins/define-custom-elements'],
  target: 'static'
};
