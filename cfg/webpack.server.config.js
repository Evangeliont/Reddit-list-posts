const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NODE_ENV = process.env.NODE_ENV;
const CSS_GLOBAL_REGEXP = /\.global\.css$/;
const { DefinePlugin } = require('webpack');

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '//localhost:3001/static',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              onlyLocals: true,
            },
          },
        ],
        exclude: CSS_GLOBAL_REGEXP,
      },
      {
        test: CSS_GLOBAL_REGEXP,
        use: ['css-loader']
      }
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })]
};
