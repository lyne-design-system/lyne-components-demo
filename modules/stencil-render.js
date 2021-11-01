const hydrate = require('lyne-test/hydrate')

export default function StencilRenderModule() {

    this.nuxt.hook('render:route', async (url, page) => {
        const render = await hydrate.renderToString(page.html, {
            clientHydrateAnnotations: true,
            removeScripts: false,
            removeUnusedStyles: false,
        });
    
        page.html = render.html;
    });
    
  }
