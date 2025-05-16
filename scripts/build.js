import { build } from 'esbuild';
import { clientConfig, serverConfig } from './config.js';

async function bundle() {
  await build({
    ...serverConfig,
    minify: true,
  });

  await build({
    ...clientConfig,
    minify: true,
  });
}

bundle();
