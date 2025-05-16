import path from 'node:path';
import { spawn } from 'node:child_process';

import { context } from 'esbuild';
import { BUILD_PATH, serverConfig, clientConfig } from './config.js';

async function dev() {
  const serverContext = await context(serverConfig);
  const clientContext = await context(clientConfig);
  serverContext.watch();
  clientContext.watch();

  const cp = spawn('node', ['--watch', path.join(BUILD_PATH, 'server.js')], {
    stdio: 'inherit',
  });

  process.on('SIGINT', () => {
    if (cp) {
      cp.kill();
    }
    process.exit(0);
  });
}

dev();
