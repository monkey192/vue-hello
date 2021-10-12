const path = require("path");

module.exports = {
  configureWebpack: {
    output: {
      filename: "build.js",
    },
    optimization: {
      splitChunks: false,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },

  css: {
    extract: false,
  },

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
