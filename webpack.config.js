var path = require("path");
var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin-advanced");

module.exports = {
  entry: [
    "./src/main.js",
    "./src/assets/css/style.css"
  ],
  output: {
    path: path.resolve(__dirname, "./dist/js/"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [{
      test: /\.(css|sass|scss)$/,
      include: path.resolve(__dirname, "./src/assets/css/"),
      use: ExtractTextPlugin.extract({
        use: [{
          loader: "css-loader",
          options: {
            sourceMap: true,
            minimize: true,
            url: false
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
        ]
      })
    },
    {
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        loaders: {
          // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          // the "scss" and "sass" values for the lang attribute to the right configs here.
          // other preprocessors should work out of the box, no loader config like this necessary.
          "scss": [
            "vue-style-loader",
            "css-loader",
            "sass-loader"
          ],
          options: {
            includePaths: [
              path.resolve(__dirname, "./src/assets/css/style.css")
            ]
          },
          "sass": [
            "vue-style-loader",
            "css-loader",
            "sass-loader?indentedSyntax"
          ]
        }
        // other vue-loader options go here
      }
    },
    {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        publicPath: "img",
        outputPath: "../img"
      }
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "../css/style.css",
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: "./img",
      to: "../img"
    },
    {
      from: "./src/assets/fonts",
      to: "../fonts"
    },
    {
      from: "./src/assets/favicon.ico",
      to: "../favicon.ico"
    },
    {
      from: "./src/assets/index.html",
      to: "../index.html"
    }
    ])
  ],
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    //  contentBase: "./",
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    hot: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
}

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map"
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
