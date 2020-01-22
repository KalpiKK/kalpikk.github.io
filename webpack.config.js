var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
    mode: "development",
    watch: true,
    entry: "./src/index.tsx",
    output: {
        path: resolve('dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            { test: /\.tsx?$/, loader: "babel-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
