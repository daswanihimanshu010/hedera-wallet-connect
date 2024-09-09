const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js', // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css|scss)$/, // Handle CSS and SCSS files
        use: [
          'style-loader', 
          'css-loader', 
          'postcss-loader', // Add postcss-loader here
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
              publicPath: 'assets'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve JS and JSX files
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    watchFiles: ['src/**/*'], // Watches for changes in the src folder
  }
};
