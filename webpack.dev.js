const {merge} = require("webpack-merge");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "[name].js",
    chunkFilename: "[id].css"
  },

  devServer: {
    port: process.env.PORT || 3000,
    static: {
      directory: path.join(process.cwd(), "./dist"),
      watch: true
    },
    watchFiles: [
      "src/**/*",
      "site/layouts/**/*.html",
      "site/content/**/*.{html,md}",
      "site/data/**/*.{json,yml,toml}"
    ],
    proxy: {
      "/": {
        target: "http://localhost:1313",
        changeOrigin: false,
        logLevel: "debug",
        onProxyRes(proxyRes) {
          const loc = proxyRes.headers.location;
          if (loc) {
            proxyRes.headers.location = loc
              .replace("http://localhost:1313", "http://localhost:3000")
              .replace("https://localhost:1313", "http://localhost:3000");
          }
        }
      }
    },
    // щоб Hugo бачив маніфест у dev (якщо ти його генеруєш через AssetsWebpackPlugin)
    devMiddleware: {
      writeToDisk: (filePath) => /site[\\/]+data[\\/]+webpack\.json$/.test(filePath)
    },
    hot: true,
    liveReload: true,
    open: true,
    historyApiFallback: {
      rewrites: [{from: /./, to: "404.html"}]
    }
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "dist/**/*.js",
        "dist/**/*.css",
      ]
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
