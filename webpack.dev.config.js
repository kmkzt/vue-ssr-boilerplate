const { join, resolve } = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const config = {
  mode: 'development',
  entry: resolve('client', 'index.ts'),
  output: {
    filename: 'client.js',
    path: resolve('server'),
    libraryTarget: 'commonjs2',
  },
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: 'development.env',
      safe: false
    }),
    // new HtmlWebpackPlugin({
    //   template: resolve('template.html'),
    // })
  ],
  externals: {
    'vue': 'vue'
  }
  // devServer: {
  //   contentBase: join(__dirname, 'public'),
  //   compress: true,
  //   port: 9000
  // },
};

module.exports = config
