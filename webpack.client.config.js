
const { resolve } = require('path')
const webpack = require('webpack')
const { smart } = require('webpack-merge')
const base = require('./webpack.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
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
    path: resolve(__dirname, 'server' ,'app')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin({
      filename: 'client.json'
    })
  ]
};

module.exports = smart(base, config)
