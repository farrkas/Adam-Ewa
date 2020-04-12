// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript


class Human {
    constructor(name) {
        this.name = name;
    }

class Man extends Human {
    name = `Adam`;
};
class Woman extends Human {
    name = `Eve`;
};
}
class God {
    // constructor() { }

    static create() {
        const Humans = [new Man(), new Woman(`Eve`)];
        return Humans;
    }
}


let humans = God.create()
console.log(Humans[0], 1];
console.log(Humans[1], 2];
//console.log(Humans[0] instanceof Man + ` true`); // 'Expected Adam to be a Man');
