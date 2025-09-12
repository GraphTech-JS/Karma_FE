const fs = require("fs");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

// Плагін для оновлення Hugo template
class HugoTemplatePlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("HugoTemplatePlugin", (compilation) => {
      let cssFile = "",
        jsFile = "";

      for (const filename in compilation.assets) {
        if (filename.startsWith("main.") && filename.endsWith(".css")) {
          cssFile = filename;
        }
        if (filename.startsWith("main.") && filename.endsWith(".js")) {
          jsFile = filename;
        }
      }

      // Оновлюємо baseof.html
      const templatePath = path.join(
        __dirname,
        "site/layouts/_default/baseof.html"
      );
      if (fs.existsSync(templatePath)) {
        let template = fs.readFileSync(templatePath, "utf8");
        template = template.replace(/\/main\.[a-f0-9]+\.css/g, `/${cssFile}`);
        template = template.replace(/\/main\.[a-f0-9]+\.js/g, `/${jsFile}`);
        fs.writeFileSync(templatePath, template);
      }
    });
  }
}

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index.js"),
  },

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "",
  },

  module: {
    rules: [
      {
        test: /\.((png)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[hash].[ext]",
          outputPath: "fonts/",
          publicPath: "../fonts/",
        },
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        options: { cacheDirectory: true },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: "css-loader",
            options: { url: false },
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "expanded",
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        // Only copy the .keep file
        {
          from: "./src/fonts/.keep",
          to: "fonts/.keep",
        },
      ],
    }),
    new HugoTemplatePlugin(),
  ],
};
