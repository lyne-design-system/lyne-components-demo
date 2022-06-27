const hydrate = require('@sbb-esta/lyne-components/hydrate');

export default function StencilRenderModule() {

  /**
   * Server-side hydration for the production build.
   */
  this.nuxt.hook('generate:page', async (page) => {
    const _page = page;

    const render = await hydrate.renderToString(_page.html, {
      removeHtmlComments: true
    });

    _page.html = render.html;
  });

  /**
   * Server-side hydration for the dev build. Since we use static target
   * from nuxt, `render:route` hook should not get called on netlify,
   * which is a static host.
   */
  this.nuxt.hook('render:route', async (url, page) => {

    const _page = page;

    const render = await hydrate.renderToString(_page.html);

    _page.html = render.html;

  });
}
