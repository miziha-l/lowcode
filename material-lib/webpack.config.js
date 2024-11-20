const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const commonConfig = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};

const devConfig = {
  ...commonConfig,
  mode: 'development',
  entry: './src/dev/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dev.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/dev/index.html',
    }),
  ],
  devServer: {
    port: 3002,
    hot: true,
    open: true,
  },
};

const prodConfig = {
  ...commonConfig,
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'material-lib',
      type: 'umd',
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};

module.exports = isProd ? prodConfig : devConfig; 