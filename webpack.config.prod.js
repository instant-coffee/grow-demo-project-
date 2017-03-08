var webpack = require('webpack');

module.exports = require('./shared.webpack.config')({
  outputFolder: 'dist',
  outputFilename: '[name].[hash]',
  defineVariables: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    DEBUG: false
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      minimize: true,
      compress: {
        drop_debugger: true,
        warnings: false,
        drop_console: true
      },
      mangle: {
        screw_ie8 : true,
        except: ['webpackJsonp']
      }
    })
  ]
});