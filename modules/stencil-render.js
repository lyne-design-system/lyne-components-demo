const hydrate = require('lyne-test/hydrate');

export default function StencilRenderModule() {

  this.nuxt.hook('render:route', async (url, page) => {
    const _page = page;
    const render = await hydrate.renderToString(_page.html, {
      clientHydrateAnnotations: true,
      removeScripts: false,
      removeUnusedStyles: false
    });

    _page.html = render.html;

    /* eslint-disable no-param-reassign */
    page = _page;
    /* eslint-enable no-param-reassign */
  });

}
