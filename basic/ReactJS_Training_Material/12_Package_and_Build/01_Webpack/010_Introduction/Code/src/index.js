class SayHello {
    constructor(who) {
        this.who = who;
    }

    msg() {
        return 'Hellooo ' + this.who + '!';
    }
}

let sh = new SayHello('Sreekanth');

console.log('sh: ' + sh.msg());
