module.exports = {
  entry: {
    app: './specs.js'
  },
  output: {
    filename: './specs.build.js',
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader?presets[]=es2015' }
    ]
  }
};
