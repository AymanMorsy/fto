const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { pages } = require("./pages.json");

let navPages = pages.map(
  (page) =>
    new htmlWebpackPlugin({
      title: `${page.title}`,
      description: `${page.description}`,
      filename: `${page.name}.html`,
      template: path.resolve(__dirname, `${["about","cart","contact","products","shipping","account",].includes(page.name) ? `src/pages/${page.name}` : "src" }`, `${page.name}.pug`),
      chunks: ["main", page.name],
    })
);

module.exports = {
  // mode: "production",
  mode: "development",
  entry: {
    main:    "./src/main.js",
    index:   "./src",
    about:   "./src/pages/about/about.js",
    products:"./src/pages/products/products.js",
    shipping:"./src/pages/shipping/shipping.js",
    cart:    "./src/pages/cart/cart.js",
    account:  "./src/pages/account/account.js",
    contact:  "./src/pages/contact/contact.js",
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
    // hot: true,
    // open: {
    //   target: ["index.html"],
    //   app: {
    //     name: "chrome",
    //     arguments: ["--incognito", "--new-window"],
    //   },
    // },
  },
};
