const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlPages = require('./webpack.pages.js')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    index: './src/javascripts/index.js',
    styleguide: './src/javascripts/styleguide.js',
    articles: './src/javascripts/articles.js',
    thought: './src/javascripts/thought.js',
    test1: './src/pages/tests/test1.js',
    test2: './src/pages/tests/test2.js',
    test3: './src/pages/tests/test3.js',
    test4: './src/pages/tests/test4.js',
    test5: './src/pages/tests/test5.js',
    test6: './src/pages/tests/test6.js',
    test7: './src/pages/tests/test7.js',
    basic: './src/javascripts/basic.js',
    searchArticles: './src/javascripts/searchArticles.js',
    searchTests: './src/javascripts/searchTests.js',
    searchRituals: './src/javascripts/searchRituals.js',
    filterTests: './src/javascripts/filterTests.js',
    filterArticles: './src/javascripts/filterArticles.js',
    filterRituals: './src/javascripts/filterRituals.js'
  },
  output: {
    path: path.resolve('.', 'docs'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [...htmlPages, new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/share/CNAME'),
          to: path.resolve(__dirname, '../docs')
        }
      ]
    })
  ]
}