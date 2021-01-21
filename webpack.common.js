/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = path.resolve(__dirname, '.');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/main.js',
  },

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: `${dir}/public`,
    publicPath: './',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              outputPath: './',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              outputPath: './',
            },
          },
        ],
      }, 
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public'],
    }),
    new HtmlWebpackPlugin({
      template: `${dir}/src/index.html`,
      filename: `${dir}/public/index.html`,
      chunks: ['main'],
      minify: false,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash-es',
    }),
  ],
};
