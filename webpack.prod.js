const { merge } = require('webpack-merge');
const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[contenthash:8].js', 
    chunkFilename: '[id].[contenthash:8].css',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css',
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
        },
        exclude: /\/node_modules\//,
      }),
      new CssMinimizerPlugin(),
    ],
  },
});
