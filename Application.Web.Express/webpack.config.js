const path = require("path");
const nodeExternals = require("webpack-node-externals");
const VueLoaderPlugin = require("vue-loader/dist/plugin");

module.exports = {
  entry: {
    server: "./src/index.ts"
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  target: "node",
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false // and __filename return blank or /
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        // Transpiles ES6-8 into ES5
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  }
};
