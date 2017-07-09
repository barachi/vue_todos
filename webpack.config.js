let path = require('path');

module.exports = {
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname,  './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/,
        options: {
          presets: [
            'es2015',
            'es2016'
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_module/,
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
