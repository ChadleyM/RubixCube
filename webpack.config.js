const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./public/js/Game.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
