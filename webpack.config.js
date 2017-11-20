const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './webpack/index.jsx',
    beats: './webpack/beats.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'src/assets/'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
