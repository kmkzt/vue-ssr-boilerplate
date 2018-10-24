const { join, resolve } = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack')

const config = {
  mode: 'production',
  entry: resolve('client', 'index.ts'),
  output: {
    filename: 'client.js',
    path: resolve('build'),
  },
  devtool: false,
  // 依存ライブラリの設定(使用先で必要なライブラリ)
  externals: {
    'vue': 'vue',
    'vue-class-component': 'vue-class-component',
    'vue-property-decorator': 'vue-property-decorator',
    'vue-router': 'vue-router',
    'vuex': 'vuex'
  },
  plugins: [
    new Dotenv({
      path: 'production.env',
      safe: false
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true
      })
    ]
  }
};

module.exports = config
