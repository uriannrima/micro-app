const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const common = require("./webpack.common");

module.exports = merge(common, {
  name: "server",
  entry: {
    server: "./src/index.ts"
  },
  output: {
    path: path.join(__dirname, "..", "dist/server"),
    publicPath: "/server",
    filename: "index.js"
  },
  target: "node",
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false // and __filename return blank or /
  },
  // Required to Server Side Rendering in Node
  externals: [nodeExternals()],
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
