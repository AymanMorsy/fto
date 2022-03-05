const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
    filename: "bundel.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{ test: /\.css/, use: ["style-loader", "css-loader"] }],
  },
  plugins: [
    new htmlWebpackPlugin({
      cache: false,
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    }),

    // new BrowserSyncPlugin(
    //   {
    //     // browse to http://localhost:3000/ during development,
    //     // ./public directory is being served
    //     host: "localhost",
    //     port: 3000,
    //     files: ["./dist/*.html"],
    //     server: { baseDir: ["dist"] },
    //
    //   }),
  ],
  devServer: {
    open: true,
    watchFiles: ["src/*.html"],
    hot: true,
  },
};
