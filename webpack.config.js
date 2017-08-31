/**
 * Created by mazhenxiao on 2016/12/19.
 */
var webpack = require("webpack");
var path = require("path");
var jspath = "./content/js/es6/";
var jsdist = "./content/dist/js/";
var css = "../css/";
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"); //thunk
var compress = require("webpack/lib/optimize/UglifyJsPlugin"); //压缩
var DedupePlugin = require("webpack/lib/optimize/DedupePlugin"); //多文件
var ImageminPlugin = require('imagemin-webpack-plugin').default;//图片压缩
//const opn = require('opn');
console.log(path.join(__dirname, jspath, "index.js"));
module.exports = {
    entry: {
        "index": path.join(__dirname, jspath, "index.js")
    },
    output: {
        publicPath: './content/dist/js/',
        path: path.join(__dirname, jsdist),
        filename: '[name]-build.js',
        chunkFilename: 'chunk-[name].js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/ },
            {
                test: /\.vue$/, loader: 'vue-loader', exclude: /node_modules/
            },
            {
                test: /\.js$/, //path.join(__dirname, jspath),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "chunk"
        }),
        /*  new compress({
            output: {
                comments: false,  // remove all comments
              },
              compress: {
                warnings: false
              }
        }), */
        new DedupePlugin({
            'process.env': { NODE_ENV: '"production"' }
        }),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development 
            pngquant: {
                quality: '95-100'
            }
        })
    ]
    /*    devServer: {
           contentBase: "E:/longfor-pc/", //以public为根目录提供文件
           historyApiFallback: true,
           hot: true,
           inline: true,
           port: 9222,
           setup: function(app) {
               // opn("http://localhost:9222/longhu/menu/menu.html");
           }
       } */
}