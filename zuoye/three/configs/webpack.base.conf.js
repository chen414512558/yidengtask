const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const _ = require('lodash');
const fs = require('fs');
const HtmlAfterWebapckPlugin = require('./htmlAfterWebpackPlugin');
// const runtime = require('babel-plugin-transform-runtime');


module.exports = {
    entry: path.join(__dirname, '../src/webapp/assets/js/main.js'),
    output: {
        path: path.join(__dirname, '../build/assets'),
        filename: 'js/[name]-[hash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/webapp/views/thumbsup.html'),
            filename: path.join(__dirname, '../build/views/thumbsup.html'),
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/webapp/views/base.html'),
            filename: path.join(__dirname, '../build/views/base.html'),
            inject: false,
            chunks: []
        }),
        new HtmlAfterWebapckPlugin({}),
        new ExtractTextPlugin('css/[name]-[hash:8].css', {
            allChunks: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    resolve: {
        extensions: ['.js', '.css']
    },
    externals: {
        jquery: 'jQuery'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options:{
                            minimize: true //css压缩
                        }
                    },
                })
            },
            {
                test: /\.js/,
                exclude: path.join(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
        ]
    }
};