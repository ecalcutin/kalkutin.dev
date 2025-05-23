import path from 'node:path';

import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';

import sharedConfig from './webpack.base';

export default merge<Configuration & DevServerConfiguration>(sharedConfig, {
  entry: './src/client/index.tsx',
  target: 'web',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'src/assets/images/kalkutin.dev.ico',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(process.cwd(), 'public', 'robots.txt'),
          to: path.resolve(process.cwd(), 'build'),
        },
      ],
    }),
  ],
});
