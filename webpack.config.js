var path = require('path');

module.exports = require('./shared.webpack.config')({
  outputFolder: 'build',
  outputFilename: '[name]',
  extraConfig: {
    devtool: 'cheap-module-source-map',
    devServer: {
      port: process.env.DEV_SERVER_PORT || 8080,
      contentBase: path.resolve(__dirname, 'build'),
      outputPath: path.resolve(__dirname, 'build')
    }
  },
  defineVariables: {
    DEBUG: true
  }
});