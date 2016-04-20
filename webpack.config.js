var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },
  module: {
    loader: [
      {
        test: /.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  },
  externals: {
    "underscore": "_",
    "backbone": "Backbone",
    "jquery": "$"
  },
  devtool: "source-map"
};