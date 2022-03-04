const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
    filename: "bundel.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    port: 8080,
    open: true,
    compress: true,
    hot: true,
    liveReload: true,
  },
};
