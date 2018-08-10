/*
https://github.com/facebook/jest/issues/4545

@mbifulco I managed to get this working for all test cases by loading a simple shim before each spec, using the setupFiles property in the jest config:

-- shim.js:

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};

-----------------------------------
To quote the blog https://facebook.github.io/react/blog/2017/09/26/react-v16.0.html

React also depends on requestAnimationFrame (even in test environments). A simple shim for test environments would be:

*/

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
