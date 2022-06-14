const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { nav } = require("./pages.json");

let navPages = nav.map(
  (page) =>
    new htmlWebpackPlugin({
      title: `${page.title}`,
      description: `${page.description}`,
      filename: `${page.name}.html`,
      template: path.resolve(__dirname, "src", `${page.name}.pug`),
      chunks: ["main", page.name],
    })
);
module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
    about: "./src/about.js",
    products: "./src/products.js",
    shipping: "./src/shipping.js",
  },
  output: {
    clean: true,
    filename: "[name].bundel.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "imges/[name][ext][query]",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss/,
        type: "asset/resource",
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css/,
        type: "asset/resource",
        use: [
          miniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
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
  plugins: [...navPages, new miniCssExtractPlugin()],
  devServer: {
    watchFiles: ["src/**/*.pug","src/**/*.scss"],
    hot: true,
    // open: {
    //   target: ["index.html"],
    //   app: {
    //     name: "chrome",
    //     arguments: ["--incognito", "--new-window"],
    //   },
    // },
  },
};
