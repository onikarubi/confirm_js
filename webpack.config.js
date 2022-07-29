const path = require('path');
const webpack = require('webpack');
const outputBase = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: [
    path.resolve(__dirname, "src/output.ts"),
  ],

  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.ts/,
        use: "ts-loader"
      }
    ]
  },

  resolve: {
    extensions: [
      ".js", ".ts"
    ]
  },

  devServer: {
    static: {
      directory: outputBase,
    },

    open: true,
  }
}