import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'recifeoutlet',
  outDir: './dist/static',
  routes: {
    '/noticias/:title': {
      type: 'contentFolder',
      title: {
        folder: './noticias',
      },
    },
  },
};
