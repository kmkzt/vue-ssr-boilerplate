
const { join, resolve } = require('path')
const webpack = require('webpack')
const { smart } = require('webpack-merge')
const base = require('./webpack.config.js')

const config = {
  entry: {
    client: resolve(__dirname, 'app', 'client.ts'),
    vendor: [
      'es6-promise',
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync'
    ]
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'server' ,'app'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"client"'
    })
  ]
};

module.exports = smart(base, config)
