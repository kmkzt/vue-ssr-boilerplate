
const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const Dotenv = require('dotenv-webpack')
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
              'styl(us)': 'vue-style-loader!css-loader!sass-loader!stylus-loader',
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
            // configFile: 'tsconfig.app.json'
          }
        }]
      },
      {
        test: /\.styl(us)?$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader']
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
      '@': resolve(__dirname, 'app'),
    }
  },
  plugins: [
    new Dotenv({
      path: devMode ? 'development.env' : 'production.env',
      safe: false
    }),
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
}

module.exports = base;
