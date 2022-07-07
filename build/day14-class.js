"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.User = User;
let user = new User('John', 24);
console.log(user);
//Output: { name: 'John', age: 24 }
