/*
1) .babelrc presets must be set to "es2015", "react" and "stage-2". Without stage-2, spread operator used in reducer code will not be compiled to es5.
2) Aditional NPM package babel-preset-stage-2 needs to be installed in order for "stage-2" preset to work.
3) Babel converts JSX also to ES5. Aditional NPM package babel-preset-react needs to be installed in order for "react" preset to work.
4) Add script tag below root <div></div> tag in index.html.
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
