/*
1) npm install --save-dev extract-text-webpack-plugin
2) Add plugin details in config file (in plugin and module.rules sections).
3) Update package.json to have 2 scripts (dev and prod).
4) 'dev' script uses WSD inject css in memory (it will not create a physical file). 'prod' uses plain webpack and actually creates a .css file in the distribution folder.
*/

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        open: true
    },
    plugins: [new ExtractTextPlugin('styles.css')]
};

module.exports = configObject;
