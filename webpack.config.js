const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
    './src/PageNotFound.scss',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
          options: {
            singleton: true,
            sourceMap: true,
          },
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            includePaths: [path.resolve(__dirname, './src')],
          },
        }],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve('./src')
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
};
