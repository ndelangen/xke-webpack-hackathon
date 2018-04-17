const path = require("path");

const webpack = require("webpack");
const WildcardsEntryWebpackPlugin = require("./lib/entrypointsPlugin");
const GeneratePagePlugin = require("./lib/generatePagePlugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: WildcardsEntryWebpackPlugin.entry("./in/**/*.example.js"),
  output: {
    path: resolve("./out"),
    filename: "[name].js",
    library: "example_[hash]",
    publicPath: "/"
  },

  mode: "development",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.example.jsx?$/,
        exclude: /node_modules/,
        use: [resolve("./lib/addHMRLoader.js")]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.ejs$/,
        loader: "ejs-loader"
      }
    ]
  },
  plugins: [
    new WildcardsEntryWebpackPlugin(),
    new webpack.DllReferencePlugin({
      context: resolve("."),
      manifest: require("./out/dll/react-manifest.json")
    }),
    new GeneratePagePlugin({
      template: resolve("./templates/iframe.ejs"),
      parser: "ejs"
    })
  ]
};
