import path from 'node:path';

import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import sharedConfig from './webpack.base';

const BUILD_PATH = path.resolve(__dirname, 'build', 'server');

export default merge<Configuration>(sharedConfig, {
  entry: './src/server/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: BUILD_PATH,
    filename: 'server.js',
    clean: true,
  },
});
