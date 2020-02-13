const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, "..", "dist/server"),
    publicPath: "/server",
    filename: "index.js"
  },
  entry: {
    server: "./src/index.ts"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]__[local]___[hash:base64:5]"
          },
          onlyLocals: true
        },
        include: /\.module\.css$/
      }
    ]
  }
});
