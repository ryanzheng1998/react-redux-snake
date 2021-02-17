const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',

    mode: "development",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/template.html'
        })
    ],


    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.png']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },

            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
}