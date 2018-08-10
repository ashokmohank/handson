/*
1. Set "hot: true" under devServer key of config object.
2. Add plugins HotModuleReplacementPlugin of webpack.
3. 'style-loader', and 'css-loader' are enough to take care of CSS HMR.
4. Add below code in index.js for JS HMR.
if (module.hot) {
  module.hot.accept();
}
*/

const path = require('path');
const webpack = require('webpack');

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
        open: true,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = configObject;
