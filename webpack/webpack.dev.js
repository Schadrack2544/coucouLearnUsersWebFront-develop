const webpack = require('webpack');
const webpackMerge = require('webpack-merge').merge;
const sass = require('sass');

const utils = require('./utils.js');
const commonConfig = require('./webpack.common.js');

const ENV = 'development';


module.exports = async () =>
  webpackMerge(await commonConfig({ env: ENV }), {
    devtool: 'inline-source-map',
    target: 'web',
    mode: ENV,
    entry: ['./src/index'],
    output: {
      path: utils.root('target/classes/static/'),
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js',
    },
    optimization: {
      moduleIds: 'named',
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
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
    devServer: {
      hot: true,
      static: {
        directory: './build/static/',
      },
      historyApiFallback: true,
      port: 5000,
      compress: true,
      open: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
  });
