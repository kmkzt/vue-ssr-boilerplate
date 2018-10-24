
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const devMode = process.env.NODE_ENV === 'development'

const base = {
  target: 'node',
  mode:  devMode ? 'development' : 'production',
  devtool: devMode ? 'inline-source-map': false,
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            },
            loaders: {
              'scss': 'vue-style-loader!css-loader!sass-loader',
              'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
              'styl(us)': 'vue-style-loader!css-loader!sass-loader!stylus-loader?indentedSyntax',
            }
          }
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
        test: /\.styl(us)?$/,
        use: devMode
          ? ['vue-style-loader', 'css-loader', 'stylus-loader']
          : ExtractTextPlugin.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: { minimize: true }
                },
                'stylus-loader'
              ],
              fallback: 'vue-style-loader'
            })

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
  plugins: [
    new Dotenv({
      path: devMode ? 'development.env' : 'production.env',
      safe: false
    }),
    new VueLoaderPlugin()
  ]
}

module.exports = base;
