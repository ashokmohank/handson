import { PI, privateVariable, square, Person } from "./module1.js";

/*
import/export is not yet supported in chrome browser. So a polyfill named browser-es-module-loader has been used to make it work.

This polyfill needs the module file extension to also be specified.
Polyfill details: https://github.com/ModuleLoader/browser-es-module-loader

This polyfill needs the .js extension to be mentioed mandatorily while importing. But per spec, it is optional.
*/

console.log(`PI: ${PI}`);
console.log(`Square of 5: ${square(5)}`);
console.log("------------------------------------");

const p = new Person("Sreekanth", "M E");
console.log(`p.fname: ${p.fname}`);
console.log(`p.lname: ${p.lname}`);
console.log(`p.website: ${p.website}`);
console.log("------------------------------------");

// Trying to access private variable of the imported module will fail
console.log(`privateVariable: ${privateVariable}`);
