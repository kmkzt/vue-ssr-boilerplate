
const {resolve } = require('path')
const { smart } = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = process.env.NODE_ENV === 'development'
const config = devMode ? require('./webpack.dev.config') : require('./webpack.prod.config');

const common = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
              // the "scss" and "sass" values for the lang attribute to the right configs here.
              // other preprocessors should work out of the box, no loader config like this necessary.
              'scss': 'vue-style-loader!css-loader!sass-loader',
              'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            }
          }
          // other vue-loader options go here
        }]
      },
      {
        test: /\.ts|.tsx$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
      { test: /\.html$/, use: "html-loader" }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve(__dirname, 'client'),
    }
  },
  plugins: [ new VueLoaderPlugin() ]
}

module.exports = smart(common, config);
