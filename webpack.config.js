const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    './src/UI/client.jsx',
  ],
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel?presets[]=react,presets[]=es2015'],
    }, {
      test: /\.css?$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.node$/,
      loader: 'node-loader',
    },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
  node: {
    fs: 'empty',
    child_process: 'empty',
  },
};
