const webpack = require('webpack')

module.exports = {
  entry: {
    filename: './src/index.js',
  },
  output: {
    filename: './build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          preset: [['env', { modules: false }]],
        },
      },
    ],
  },
}
