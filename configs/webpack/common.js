// shared config (dev and prod)
const {resolve}       = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'), // Just grabs the src location and brings it to scope
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules', 'postcss-loader',],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
          'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin(),
  ],
  externals: {
    // DO NOT SET REACT AS EXTERNAL
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};
