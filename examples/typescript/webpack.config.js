const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        home: './src/index.ts',
        factory: './src/creational-pattern/factory/index.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './',
        open: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
};
