const { resolve } = require('path')
const { DefinePlugin }= require('webpack')
const { smart } = require('webpack-merge')
const base = require('./webpack.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const config = {
  target: 'node',
  entry: {
    server: resolve(__dirname, 'app', 'server.ts')
  },
  output:{
    filename: 'server.js',
    path: resolve(__dirname, 'server' ,'app'),
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new DefinePlugin({
      'process.env.VUE_ENV': 'server'
    }),
    new VueSSRServerPlugin({
      filename: 'server.json'
    })
  ]
}

module.exports = smart(base, config)
