const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  output: {
    clean: true,
    filename: "bundel.js",
    path: path.resolve(__dirname, "dist"),
    // assetModuleFilename: "imges/[name][ext][query]",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "imges/[name].[ext]",
        },
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "FTO about",
      filename: "about.html",
      template: path.resolve(__dirname, "src", "about.pug"),
    }),
    new htmlWebpackPlugin({
      title: "FTO home",
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.pug"),
      minify: false,
    }),
    new miniCssExtractPlugin(),
  ],
  devServer: {
    watchFiles: ["src/**/*.pug"],
    hot: true,
    // open: true,
  },
};
