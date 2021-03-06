const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  },
  devServer: {
    proxy: "http://www.api.qsyj.com/"
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.set("externals", {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios:"axios"
    });
  }
};
