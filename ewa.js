// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript


class God {
    static create() {
        return [new Man, new Woman];
    }
}
class Human { }
class Man extends Human {
    const name=`Adam`;
    return name;
 }
class Woman extends Human {
    const name=`Eve`;
    return name;
 }


let humans = God.create()
console.log(humans[0]);
console.log(humans[1]);
console.log(typeof (humans), humans.length);
//console.log(Humans[0] instanceof Man + ` true`); // 'Expected Adam to be a Man');