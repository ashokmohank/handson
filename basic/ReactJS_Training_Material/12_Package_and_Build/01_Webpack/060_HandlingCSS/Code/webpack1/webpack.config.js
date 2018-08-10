/*
1) Install css-loader and style-loader as dependencies.
2) css-loader loads the css file. Makes import statement work with a CSS file.
3) style-loader injects styles into the HTML file. So HTML file need not link to the .css file.
4) WSD Live re-load works with css files also.
*/

const path = require('path');

const configObject = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname + '/public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        open: true
    }
};

module.exports = configObject;
