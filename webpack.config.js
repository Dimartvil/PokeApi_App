const path = require('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test:/\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new CopyPlugin({
            patterns:[
                {from: './src/styles/styles.css', to: ''}
            ]
        }),

        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: 'main.html'
        })

    ]

}