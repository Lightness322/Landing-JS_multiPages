const config = {
  mode: 'production',
  entry: { index: './src/js/index.js', header: './src/js/header.js' },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}

module.exports = config
