const ENV = process.env.NODE_ENV = process.env.ENV = 'prod';

var helpers = require('./helpers');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
//    filename: '[name].[hash].js',
//    chunkFilename: '[id].[hash].chunk.js'
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
/*    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      }
    }),*/
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
