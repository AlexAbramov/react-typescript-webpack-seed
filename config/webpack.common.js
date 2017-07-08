var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/app.ts'
  },

  resolve: {
    extensions: ['*.tsx', '.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ['url-loader?name=assets/img/[name].[ext]']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({use:['css-loader','sass-loader']})
      },      
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  externals:{
    "react": "React",
    "react-dom":"ReactDOM"
  },
  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: '!!ejs-loader!src/index.html',
      baseurl: (process.env.NODE_ENV=='prod') ?'/react-typescript-webpack-seed/':'/'
    }),

    new webpack.DefinePlugin({
      react_version: JSON.stringify(require(helpers.root("node_modules","@react/package.json")).version),
      webpack_version: JSON.stringify(require(helpers.root("node_modules","webpack/package.json")).version)
    })    
  ]
};
