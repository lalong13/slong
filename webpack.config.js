// webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'client.js'),
  output: {
    path: path.join(__dirname, 'src', 'public', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader?presets[]=react,presets[]=es2015,cacheDirectory=babel_cache']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: process.env.NODE_ENV === "development" ? false : { warnings: false },
      mangle: process.env.NODE_ENV !== "development",
      sourcemap: false,
      beautify: process.env.NODE_ENV === "development",
      dead_code: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
