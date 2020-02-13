const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // Output options
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  // Loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
        exclude: /\.module\.css$/
      }
    ]
  },
  // Plugin to load "*.vue" files
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
  // Extensions to add automatically to the end of a import
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  watch: true,
};
