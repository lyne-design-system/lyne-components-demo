const hydrate = require('lyne-test/hydrate');

export default function StencilRenderModule() {

  /**
   * We do server-side hydration only for the production build.
   * During development, there is no server-side hydration.
   *
   * To check your work before releasing, do the following:
   * `npm run generate`
   * `npm start`
   */
  this.nuxt.hook('generate:page', async (page) => {
    const _page = page;

    const render = await hydrate.renderToString(_page.html);

    _page.html = render.html;

    /* eslint-disable no-param-reassign */
    page = _page;
    /* eslint-enable no-param-reassign */
  });

}
