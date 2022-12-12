import { Configuration } from "webpack";
import merge from "webpack-merge";
import nodeExternals from "webpack-node-externals";

import sharedConfig from "./webpack.base";

export default merge<Configuration>(sharedConfig, {
  entry: "./src/server/index.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "server.js",
    clean: false,
  },
});
