const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = require('./vendors');

/**
TODO:
- use ExtractTextPlugin to generate a separate file for CSS.
**/

module.exports = {
  entry: {
    // This entry config has 2 separate main bundles:
    // bundle.js contains our source code
    // vendor.js contains vendor libs that don't change often and thus browsers
    // can cache this file leading to quicker load times.
    bundle: './src/index.js',
    vendors: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // [name] interpolates an entry point name (bundle, vendor, etc)
    // [chunkhash] interpolates cache busting hash
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['file-loader'],
        test: /\.(png|jpg|gif)$/
      },
      {
        use: ['url-loader'],
        test: /\.(eot|svg|ttf|woff|woff2)$/
      },
      {
        test: /\.(css|scss|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
              // sourceMap currently disabled due to a runtime overhead in
              // development; a noticeable flicker is observed applying CSS
              // sourceMap: true
            }
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              // Necessary for external CSS imports to work
              ident: 'postcss',
              // sourceMap: true,
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // manifest keeps track of changes to vendor files
      // so Webpack doesn't mistakenly add a new hash to
      // the vendor file when we only change source code.
      names: ['vendors', 'manifest']
    }),
    // This plugin automatically injects scripts into the
    // head of index.html so we don't have to manually
    // manage them.
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // Webpack will look for the process.env.NODE_ENV window scope variable
    // and set the value to NodeJS's process.env.NODE_ENV value from
    // your local machine
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // Some packages expect jQuery global variables to exist or they'll throw
    // initialization errors e.g. Bootstrap. Here we map a module to a global
    // variable.
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  // webpack-dev-server configuration
  devServer: {
    // We're running webpack-dev-server inside a Docker container. Docker
    // will assign dynamic IPs thus we need to listen on all IPv4 addresses.
    // The loopback localhost address will not suffice. By using 0.0.0.0 we
    // instruct webpack-dev-server to bind to all interfaces.
    host: '0.0.0.0',
    port: 9000,
    // This is the external public facing address and is required for the browser
    // to establish a socket connection for hot reloading when code changes.
    public: 'localhost',
    watchOptions: {
      ignored: /node_modules/
    }
  }
};
