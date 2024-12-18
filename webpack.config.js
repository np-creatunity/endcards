"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "templates"),
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "templates"),
    port: 3000,
    hot: true,
    liveReload: true,
    watchFiles: ["src/*.html", "src/*.scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      scriptLoading: "defer",
      minify: true,
      template: "src/template-1.html",
      filename: "template-1.html",
    }),
    new miniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HTMLInlineCSSWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              api: "modern",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
