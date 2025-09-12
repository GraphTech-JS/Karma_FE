const {merge} = require("webpack-merge");
const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },

  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      minSize: 5000,
      maxSize: 30000,
      maxAsyncRequests: 8,
      maxInitialRequests: 2,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: 10,
          enforce: true
        },
        slider: {
          test: /[\\/]src[\\/]js[\\/]slider\.js$/,
          name: "slider",
          chunks: "all",
          priority: 20,
          enforce: true
        },
        slidersInit: {
          test: /[\\/]src[\\/]js[\\/]sliders-init\.js$/,
          name: "sliders-init",
          chunks: "all",
          priority: 20,
          enforce: true
        },
        modal: {
          test: /[\\/]src[\\/]js[\\/]modal\.js$/,
          name: "modal",
          chunks: "all",
          priority: 20,
          enforce: true
        },
        performance: {
          test: /[\\/]src[\\/]js[\\/]performance\.js$/,
          name: "performance",
          chunks: "all",
          priority: 20,
          enforce: true
        },
        accessibility: {
          test: /[\\/]src[\\/]js[\\/]accessibility\.js$/,
          name: "accessibility",
          chunks: "all",
          priority: 20,
          enforce: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
            passes: 3,
            unsafe: true,
            unsafe_comps: true,
            unsafe_math: true,
            unsafe_proto: true,
            dead_code: true,
            unused: true
          },
          mangle: {
            safari10: true,
            properties: {
              regex: /^_/
            }
          },
          format: {
            comments: false
          }
        },
        extractComments: false,
        parallel: true
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {removeAll: true},
              normalizeWhitespace: true,
              colormin: true,
              minifySelectors: true
            },
          ],
        },
      }),
    ]
  }
});
