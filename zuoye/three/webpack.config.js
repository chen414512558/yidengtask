const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const _ = require('lodash');
const fs = require('fs');
// const runtime = require('babel-plugin-transform-runtime');
function htmlAfterWebapckPlugin(options) {
    this.options = options;
}

function arraytoStringByAassets(arrs, isJs) {
    let icon = isJs? 'js': 'css';
    arrs = arrs.map(item=>{
        let res = item.slice(item.indexOf(icon)-1, item.length);
        if (isJs) {
            return `<script src="${res}"></script>`;
        }
        return `<link rel="stylesheet" href="${res}">`;
    });
    return '\n' + arrs.join('') + '\n';
}

htmlAfterWebapckPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-after-html-processing', function (htmlPluginData, callback) {
            let assets = htmlPluginData.assets;
            let html = htmlPluginData.html;
            html = html.replace('{% block style %}', `{% block style %} ${arraytoStringByAassets(assets.css, false)}`);
            html = html.replace('{% block script %}', `{% block script %} ${arraytoStringByAassets(assets.js, true)}`);
            htmlPluginData.html = html;
            callback(null, htmlPluginData);
        });
    });
};

module.exports = {
    entry: path.join(__dirname, './src/webapp/assets/js/main.js'),
    output: {
        path: path.join(__dirname, './build/assets'),
        filename: 'js/[name]-[hash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/webapp/views/thumbsup.html'),
            filename: path.join(__dirname, './build/views/thumbsup.html'),
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/webapp/views/base.html'),
            filename: path.join(__dirname, './build/views/base.html'),
            inject: false,
            chunks: []
        }),
        new htmlAfterWebapckPlugin({}),
        new ExtractTextPlugin('css/[name]-[hash:8].css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            output: {
                comments: false
            },
            compress: {
                warnings: false,
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true
            },
            sourceMap: false
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
                    use: "css-loader",
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