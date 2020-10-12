const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/
            },
            {
                test:/\.scss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
      })
    ],
}