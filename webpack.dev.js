const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',

    output: {
        filename: '[name].[contenthash].js',
    },

    devServer: {
        port: 3000,
        disableHostCheck: true,
    },

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
    },


})
