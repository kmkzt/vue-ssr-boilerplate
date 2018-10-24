const webpack = require('webpack')
const { smart } = require('webpack-merge')
const base = require('./webpack.config.js')

const config =  {
  target: 'node',
  entry: resolve('app', 'server.ts'),
  output:{
    filename: '[name].js',
    path: resolve(__dirname, 'server' ,'app'),
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"server"'
    })
  ]
})

module.exports = smart(base, config)
