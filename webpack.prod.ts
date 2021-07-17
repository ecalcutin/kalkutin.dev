import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import webpackCommon from "./webpack.common";

const configuration = merge<Configuration>(webpackCommon, {
  mode: "production",
});

export default configuration;
