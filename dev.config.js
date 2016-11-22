require('babel-polyfill');

// Webpack config for development
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var assetsPath = path.resolve(__dirname, './dist');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: {bundle:[
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true&path=http://localhost:3000/__webpack_hmr',
        './src/index.js'
    ]},
    output: {
        libraryTarget: 'var',
        library: '[name]',
        path: assetsPath,
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|fork|jquery-ui.js)/,
                loaders: ['babel-loader?cacheDirectory'],
                // query: {
                //     // https://github.com/babel/babel-loader#options
                //     cacheDirectory: true,
                //     plugins: ['transform-decorators-legacy', 'react-hot-loader/babel'],
                //     presets: ['es2015', 'stage-2', 'react']
                // }
            },

            {test: /\.json$/, loader: "json-loader"},
            {test: /\.css$/, loader: "style-loader?url=false!css-loader?url=false"}]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery",
        "$": "jQuery"
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        extensions: ['.*', '.js'],
        alias: {
            react: path.resolve('./node_modules/react'),
        },
    },
    plugins: [
        new webpack.IgnorePlugin(/webpack-stats\.json$/),
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true,
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    profile: true,
    stats: {
        hash: true,
        version: true,
        timings: true,
        assets: true,
        chunks: true,
        modules: true,
        reasons: true,
        children: true,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: true
    }
};

