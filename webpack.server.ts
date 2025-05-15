import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import sharedConfig from './webpack.base';

export default merge<Configuration>(sharedConfig, {
  entry: './src/server/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    clean: false,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
