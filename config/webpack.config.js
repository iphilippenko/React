let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [ "./src/index.js"],
    output: {
        filename: 'bundle.[hash].js',
        path: 'build'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.ejs'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'API_KEY': JSON.stringify(process.env.API_KEY)
            }
        })
    ],
    resolve: {
        extensions: [
            '',
            '.ts',
            '.js'
        ],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: path.resolve()
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: "file?name=[path][name].[etx]"
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};