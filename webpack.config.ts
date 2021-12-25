import path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import HtmlWebpackPlugin from "html-webpack-plugin";
import PrerenderSPAPlugin from "@dreysolano/prerender-spa-plugin";

process.stdout.write(`Building for ${process.env.NODE_ENV}...\n`);

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const plugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
    favicon: "src/assets/images/kalkutin.dev.ico",
  }),
];

if (isProduction) {
  plugins.push(
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, "dist"),
      routes: ["/"],
    })
  );
}

const configuration: Configuration = {
  entry: "./src/index.tsx",
  target: "web",
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-cheap-module-source-map" : "source-map",
  devServer: {
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      pages: path.resolve(__dirname, "src", "pages"),
      components: path.resolve(__dirname, "src", "components"),
      theme: path.resolve(__dirname, "src", "theme"),
      assets: path.resolve(__dirname, "src", "assets"),
      config: path.resolve(__dirname, "src", "config"),
    },
  },
  plugins,
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};

export default configuration;
