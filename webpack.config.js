const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "renderer/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist", "renderer"),
    // publicPath: "/dist/",
    filename: "index_bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".wasm", ".mjs", ".js", ".jsx", ".json"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    hotOnly: true
  },
};
