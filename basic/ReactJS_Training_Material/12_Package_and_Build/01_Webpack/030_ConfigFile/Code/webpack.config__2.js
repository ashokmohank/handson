/*
1. A separate file named .babelrc needs to be created and presets must be set to "es2015". This will make babel-loader to compile ES2015(ES6) to ES5
2. NPM packages babel-core, babel-loader, babel-preset-2015 need to be installed
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
    }
};

module.exports = configObject;
