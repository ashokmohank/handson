import level1a from './level1a';
import level1b from './level1b';

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
