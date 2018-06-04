const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log("#######");
console.log(resolveApp("src"));

module.exports = {
  entry: "./src/components/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "build.js",
    libraryTarget: "umd",
    library: "gm-ui-components"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ["file-loader"],
        test: /\.(jpg|gif)$/
      },
      {
        use: ["url-loader"],
        test: /\.(eot|png|svg|ttf|woff|woff2)$/
      },
      {
        test: /\.(css|scss|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
              // sourceMap currently disabled due to a runtime overhead in
              // development; a noticeable flicker is observed applying CSS
              // sourceMap: true
            }
          },
          "resolve-url-loader",
          {
            loader: "postcss-loader",
            options: {
              // Necessary for external CSS imports to work
              ident: "postcss",
              // sourceMap: true,
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9" // React doesn't support IE8 anyway
                  ],
                  flexbox: "no-2009"
                })
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [resolveApp("src")]
  }
};
