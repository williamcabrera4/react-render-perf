const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  externals: [nodeExternals()],
  entry: ['./src/index.js'],
  target: 'node',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    publicPath: '/lib/',
    library: 'react-render-perf',
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, 'app')
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file?name=[path][name].[hash].[ext]',
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
      },
      {
        test: /\.mp4$/,
        loader: 'url?limit=10000&mimetype=video/mp4'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};
