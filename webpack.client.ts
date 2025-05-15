import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

import sharedConfig from './webpack.base';

export default merge<Configuration & DevServerConfiguration>(sharedConfig, {
  entry: './src/index.tsx',
  target: 'web',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
});
