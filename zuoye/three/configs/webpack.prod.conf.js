const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    plugins: [
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
    ]
});