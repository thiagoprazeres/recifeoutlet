import { setPluginConfig, ScullyConfig, prod } from '@scullyio/scully';
import { GoogleAnalytics } from '@scullyio/scully-plugin-google-analytics';

const defaultPostRenderers = [];

if (prod) {
  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'G-1VSWDYK2DK' });
  defaultPostRenderers.push(GoogleAnalytics);
}

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'recifeoutlet',
  outDir: './dist/static',
  defaultPostRenderers,
  routes: {
    '/': {
      type: 'contentFolder',
      postRenderers: [...defaultPostRenderers],
    },
    '/noticias/:title': {
      type: 'contentFolder',
      title: {
        folder: './noticias',
      },
    },
  },
};
