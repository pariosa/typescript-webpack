  
const path = require('path');

module.exports = {
  mode:'development',
  devtool: 'eval-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      },
      {
        test: /\.tsx$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  }, 
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  },  
  output: {
    publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};