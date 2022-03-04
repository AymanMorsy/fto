const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // Default settings
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: path.join(__dirname, "src", "index.js"),
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
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
