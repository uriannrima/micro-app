const merge = require("webpack-merge");
const common = require("./webpack.client.js");

module.exports = merge(common, {
  watch: false,
  mode: "production"
});
