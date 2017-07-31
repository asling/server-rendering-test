/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: './client.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/__build__/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }]
  }
}
