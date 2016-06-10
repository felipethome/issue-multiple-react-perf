var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'build/scripts');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    app: APP_DIR + '/main.js',
    vendors: [
      'react',
      'react-dom',
      // 'react-addons-perf'
    ],
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/scripts/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'jsx-loader?insertPragma=React.DOM',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js',
    }),
  ],
};