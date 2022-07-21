"use strict";
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value <= 0 || value >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = value;
    }
    get isOld() {
        return this._age > 100 ? true : false;
    }
}
let person = new Person();
person.age = 50;
console.log(person.age, person.isOld);
//Output: 50 false
