module.exports = {
  entry: './src/javascripts/client.jsx',

  output: {
    path: './lib/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  module: {
    loaders: [
      { test: /.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /.css$/, exclude: /node_modules/, loader: 'style!css' }
    ]
  }
};
