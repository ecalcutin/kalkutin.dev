import path from 'node:path';

export const WORKSPACE_DIR = process.cwd();
export const BUILD_PATH = path.join(WORKSPACE_DIR, 'build');

const sharedConfig = {
  bundle: true,
  format: 'esm',
  loader: {
    '.woff2': 'file',
  },
};

export const serverConfig = {
  ...sharedConfig,
  platform: 'node',
  packages: 'external',
  entryPoints: {
    server: path.join(WORKSPACE_DIR, 'src', 'server', 'index.ts'),
  },
  external: ['*.woff2'],
  outdir: path.join(BUILD_PATH),
};

export const clientConfig = {
  ...sharedConfig,
  platform: 'browser',
  entryPoints: {
    client: path.join(WORKSPACE_DIR, 'src', 'client', 'index.tsx'),
  },
  outdir: path.join(BUILD_PATH, 'static'),
};
