const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
      index: "./src/index.js",
    },
    devtool: "inline-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        title: "Basic React Site",
      }),
    ],
    output: {
      filename: "index.bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: "",
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 8080,
      hot: true
    },
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ]
      },
}