/* eslint-disable no-undef */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: [
    "./source/assets/javascripts/index.js",
    "./source/assets/stylesheets/application.scss",
    "./source/assets/stylesheets/tailwind.css",
  ],
  output: {
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [new MiniCssExtractPlugin({})],
  module: {
    rules: [
      {
        test: /\\.(js|jsx)$/,
        loader: "babel-loader",
      },
      // Font Awesome
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        type: "asset",
      },
    ],
  },
  devtool: "source-map",
};
