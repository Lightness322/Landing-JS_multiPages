const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    header: './src/js/header.js',
    about: './src/js/about.js',
    blog: './src/js/blog.js',
    pricing: './src/js/pricing.js',
    contacts: './src/js/contacts.js',
  },
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
