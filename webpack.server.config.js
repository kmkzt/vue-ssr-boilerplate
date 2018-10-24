const { resolve } = require('path')
const { DefinePlugin }= require('webpack')
const { smart } = require('webpack-merge')
const base = require('./webpack.config.js')

const config = {
  target: 'node',
  entry: {
    server: resolve('app', 'server.ts')
  },
  output:{
    filename: '[name].js',
    path: resolve(__dirname, 'server' ,'app'),
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new DefinePlugin({
      'process.env.VUE_ENV': 'server'
    })
  ]
}

module.exports = smart(base, config)
