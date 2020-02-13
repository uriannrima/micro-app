const merge = require("webpack-merge");
const common = require("./webpack.server.js");

module.exports = merge(common, {
  watch: false,
  mode: "production"
});
