const webpack = require('webpack');
const webpackMerge = require('webpack-merge').merge;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const sass = require('sass');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'production';

module.exports = async () =>
  webpackMerge(await commonConfig({ env: ENV }), {
    mode: ENV,
    entry: {
      main: './src/index',
    },
    output: {
      path: utils.root('build/static/'),
      filename: '[name].[contenthash].bundle.js',
      chunkFilename: '[name].[chunkhash].chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            'css-loader',
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: { implementation: sass },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: false,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
            toplevel: true,
            module: true,
            compress: {
              warnings: false,
              ecma: 6,
              module: true,
              toplevel: true,
            },
            output: {
              comments: false,
              beautify: false,
              indent_level: 2,
              ecma: 6,
            },
            mangle: {
              keep_fnames: true,
              module: true,
              toplevel: true,
            },
          },
        }),
        new CssMinimizerPlugin({
          parallel: true,
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name].[contenthash].css',
        chunkFilename: 'assets/[name].[chunkhash].css',
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  });
