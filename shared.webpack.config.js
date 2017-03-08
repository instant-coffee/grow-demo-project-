var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');
var HappyPack = require('happypack');
var nunjucks = require('nunjucks');

var splitsRegex = /pages\/.*\/container\/.*\.js$/

var config = {
  entry: {
    main: path.resolve(__dirname, 'src/app/index.js')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [
          /(node_modules|bower_components)/,
          splitsRegex
        ],
        loader: 'babel',
        happy: { id: 'js' }
      },
      {
        test: splitsRegex,
        loaders: ['bundle?lazy&name=[name]', 'babel']
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css!sass'
        )
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.json$/i,
        loader: 'json-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules")]
  },
  callbackLoader: {
    subEnvVar: function(varName, defaultValue) {
      return JSON.stringify(process.env[varName] || defaultValue);
    }
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  plugins: [
    new HappyPack({ id: 'js' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/templates/index.html',
      inject: 'body'
    })
  ]
};

module.exports = function(options) {

  config = Object.assign({}, config, options.extraConfig || {});

  var argv = require('minimist')(process.argv.slice(2));
  var outputFolder = argv['output-path'] || options.outputFolder;

  config.output = {
    path: path.resolve(__dirname, outputFolder),
    filename: options.outputFilename + '.js'
  };

  config.module.loaders.push(
    {
      test: /\.png|\.jpg|\.ico$/,
      loader: 'file-loader',
      query: {
        name: 'images/' + options.outputFilename + '.[ext]'
      }
    },
    {
      test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
      query: {
        name: 'fonts/' + options.outputFilename + '.[ext]'
      }
    }
  );

  var defineVariables = Object.assign(
    {}, options.defineVariables, {
      TIMEZONE_NAME: undefined,
      API_HOST: JSON.stringify(process.env.API_HOST || "http://localhost:8000")
    }
  );

  if (options.plugins) {
    config.plugins = config.plugins.concat(options.plugins);
  }

  config.plugins.push(
    new Clean([outputFolder]),
    new ExtractTextPlugin(options.outputFilename + '.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin(defineVariables)
  );

  return config;

};
