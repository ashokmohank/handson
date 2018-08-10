1. npm install jest --save-dev

2. Have this in package.json:
    "scripts": {
      "test": "jest --coverage"
    },

3. npm test

4. jest will automatically scan the source code folder for files named *.test.js and for all files inside the folder __tests__ and run them all.