var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var path = require('path');

var srcPath = path.resolve(__dirname, 'src', 'index.ts');
var dstPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'mi-angular-date-range-picker.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /.*\/(src|node_modules)\/.*\.ts$/, loaders: ['awesome-typescript-loader']}
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new ngAnnotatePlugin({add: true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
