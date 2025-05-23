"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;

module.exports = ({ mode }) => {
  return {
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
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/template-1.html",
        filename: "template-1.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/template-2.html",
        filename: "template-2.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/template-3.html",
        filename: "template-3.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/template-4.html",
        filename: "template-4.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/template-5.html",
        filename: "template-5.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/plug-in-heater.html",
        filename: "plug-in-heater.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v1.html",
        filename: "end001_v1.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v2.html",
        filename: "end001_v2.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v2a.html",
        filename: "end001_v2a.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v2b.html",
        filename: "end001_v2b.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v2c.html",
        filename: "end001_v2c.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v3.html",
        filename: "end001_v3.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v4.html",
        filename: "end001_v4.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v4a.html",
        filename: "end001_v4a.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v4b.html",
        filename: "end001_v4b.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v4c.html",
        filename: "end001_v4c.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v5.html",
        filename: "end001_v5.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v6.html",
        filename: "end001_v6.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end003_v2.html",
        filename: "end003_v2.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end005_v1.html",
        filename: "end005_v1.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end005_v2.html",
        filename: "end005_v2.html",
      }),
      // MEMORIAL
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end003_v3_memorial.html",
        filename: "end003_v3_memorial.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end003_v4_memorial.html",
        filename: "end003_v4_memorial.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end003_v5_memorial.html",
        filename: "end003_v5_memorial.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v2c_memorial.html",
        filename: "end001_v2c_memorial.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/end001_v5_memorial.html",
        filename: "end001_v5_memorial.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/evella_end001_v1.html",
        filename: "evella_end001_v1.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/evella_end002_v1.html",
        filename: "evella_end002_v1.html",
      }),
      new HtmlWebpackPlugin({
        inject: mode == "production" ? false : true,
        scriptLoading: "defer",
        minify: true,
        template: "src/evella_end003_v1.html",
        filename: "evella_end003_v1.html",
      }),
      new miniCssExtractPlugin({
        filename: "[name].css",
      }),
      mode != "production" && new HTMLInlineCSSWebpackPlugin(),
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
};
