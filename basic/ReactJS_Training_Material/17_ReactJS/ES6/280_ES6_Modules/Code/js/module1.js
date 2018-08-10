import ws from './module1a.js';

export const PI = 3.14;
const privateVariable = 100; // private variable

export function square(x) {
  return (x * x);
}

function cube(x) { // private function
  return (square(x) * x);
}

export class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.website = ws;
  }
}

class Animal { // private class
  constructor(hasTail) {
    this.hasTail = hasTail;
  }
}
