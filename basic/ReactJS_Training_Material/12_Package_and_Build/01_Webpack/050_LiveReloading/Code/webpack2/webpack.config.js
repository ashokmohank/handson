/*
1) Add new key named 'devServer' to config object for WSD.
2) WSD will not create build.js. It will generate build.js in memory. However, index.html must have a script tag referring to build.js.
3) The 'hot' flag of 'devServer' configuration enables live reloading.
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
