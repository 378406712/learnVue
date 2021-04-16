const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  devServer: {
    // 静态文件根目录
    contentBase: path.join(__dirname, "www"),
    compress: false,
    port: 8080,
    publicPath: "/xuni/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
};
