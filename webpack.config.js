// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const publicPath = "/"
const buildFolder = path.join(__dirname, 'src', 'public')

console.log("Output: "+ buildFolder);

module.exports = {
  entry: path.join(__dirname, 'src', 'client.js'),
  output: {
    path: buildFolder,
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: publicPath,
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        uglifyOptions: {
          compress: {
            comparisons: false,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        sourceMap: true,
      }),
    ],
    splitChunks:{},
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        loader: "eslint-loader",
        exclude: /public/,
        include: path.join(__dirname, 'src'),
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: "url-loader",
            options: {
              limit: 10000,
              name: 'public/[name].[hash:8].[ext]',
            }
          },
          {
            test: /\.(js|jsx|mjs)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              compact: true,
            },
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  publicPath: publicPath,
                },
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: () => [
                    require("postcss-flexbugs-fixes"),
                    autoprefixer({
                      flexbox: "no-2009",
                    }),
                    require("cssnano"),
                  ],
                  publicPath: publicPath,
                  sourceMap: true,
                },
              },
            ],
          },
          {
            loader: "file-loader",
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: 'public/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      basePath:publicPath+'css/',
    }),
    new ManifestPlugin({
      filename: 'asset-manifest.json',
    })
  ],
};
