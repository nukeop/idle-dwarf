const webpack = require('webpack');
const path = require('path');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src', 'client', 'app');
const RESOURCES_DIR = path.resolve(__dirname, 'resources');

module.exports = {
  entry: [
    "react-hot-loader/patch",
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(APP_DIR, 'index.js')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    hot: true,
    contentBase: BUILD_DIR,
    publicPath: 'http://localhost:8080/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: APP_DIR
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[local]!sass-loader'
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        include: RESOURCES_DIR
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new GoogleFontsPlugin({
      fonts: [
        {
          family: 'lato',
          variants: ['regular', '300', '700']
        }
      ]
    })
  ]
}
