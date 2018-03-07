const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, 'lib');
const APP_DIR = path.resolve(__dirname, 'src');

const WebpackConfig = {

  entry: APP_DIR + '/index.js',

  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'CodeHighlight'
  },
  "plugins": ["babel-plugin-styled-components"],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /.js$/,
        exclude: /node_modules/,
        include : APP_DIR,
        options: {
          "presets": ["react", "es2015", "stage-0"]
        }
      }
    ],
  },

}


// webpack production config.
if ( process.env.NODE_ENV === 'production' ) {

  WebpackConfig.externals = {
    'react': 'react',
    'react-dom': 'react-dom'
  };
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  };


}


module.exports = WebpackConfig;