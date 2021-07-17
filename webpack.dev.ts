import { merge } from "webpack-merge";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import webpackCommon from "./webpack.common";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const configuration = merge<Configuration>(webpackCommon, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 8080,
  },
});
export default configuration;
