const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const { getHypernovaComponents } = require("./utils");

module.exports = merge(common, {
  name: "client",
  devtool: "source-map",
  entry: getHypernovaComponents(),
  output: {
    path: path.join(__dirname, "..", "dist/client"),
    publicPath: "/client",
    filename: "[name].js"
  },
  target: "web",  
  node: {
    fs: "empty",
    module: "empty"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            }
          }
        ],
        include: /\.module\.css$/
      }
    ]
  }
});
