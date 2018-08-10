/*Demo of minification*/
import _ from 'lodash';
import level1a from './level1a';
import level1b from './level1b';
import app1 from './app1.css';
import app2 from './app2.css';

level1a.l1a();
level1a.l1a2a();
level1b();

//ES6 class
class SayHello {
    constructor(who) {
        this.who = who;
    }

    msg() {
        return 'Hello ' + this.who + '!';
    }
}

let sh = new SayHello('Sreekanth');

console.log('sh: ' + sh.msg());

/*
Generate random number between 100 and 200 Custom Method using Lodash
*/
console.log(_.random(100, 200));

/*
return new array with only unique elements
*/
let numbers = [1, 5, 8, 10, 1, 5, 8, 10, 1, 5, 8, 10];
numbers = _.uniq(numbers);

console.log(numbers);
