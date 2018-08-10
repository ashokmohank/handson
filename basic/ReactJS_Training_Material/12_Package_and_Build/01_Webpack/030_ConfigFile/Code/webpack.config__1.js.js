/*
1. The import/export of modules in webpack.config.js must be in Common JS format.
2. Just run the "webpack" command to pick webpack.config.js file in the same folder by default
3. 'npm run build' command can also be used instead of "webpack" command. This is because a new script named 'build' is added to package.json. This script simply runs the command 'webpack'
*/
const path = require('path');

const configObject = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname + '/public')
    }
};

module.exports = configObject;
