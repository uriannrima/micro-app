const path = require("path");
const glob = require("glob");
const nodeExternals = require("webpack-node-externals");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const output = {
  path: path.join(__dirname, "dist"),
  publicPath: "/",
  filename: "[name].js"
};

const _module = {
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
};

const plugins = [new VueLoaderPlugin()];

const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
};

const externals = [nodeExternals()];

const node = {
  // Need this when working with express, otherwise the build fails
  __dirname: false, // if you don't put this is, __dirname
  __filename: false // and __filename return blank or /
};

const server = {
  entry: {
    server: "./src/index.ts"
  },
  output,
  target: "node",
  node,
  externals,
  module: {
    ..._module,
    rules: _module.rules.concat({
      test: /\.css$/,
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: "[name]__[local]___[hash:base64:5]"
        },
        onlyLocals: true
      },
      include: /\.module\.css$/
    })
  },
  plugins,
  resolve
};

const componentFiles = glob.sync("./src/modules/**/hypernova.ts");
const hypernovaComponents = componentFiles.reduce((map, current) => {
  const componentPath = current.split("/");
  const componentName = componentPath[componentPath.length - 2];

  return {
    ...map,
    [componentName]: current
  };
}, {});

const client = {
  entry: hypernovaComponents,
  output,
  target: "web",
  node: {
    fs: "empty",
    module: "empty"
  },
  module: {
    ..._module,
    rules: _module.rules.concat({
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
    })
  },
  plugins,
  resolve
};

module.exports = [server, client];
