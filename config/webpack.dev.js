const ENV = process.env.NODE_ENV = process.env.ENV = 'dev';

var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('.'),
    sourceMapFilename: '[name].js.map',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    port: 4200,
    contentBase: 'src/'
  }
});
