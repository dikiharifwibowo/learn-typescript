"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = false;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
}
let admin = new Admin('John', 24);
console.log(admin.getRole());
//Output: { read: true, write: false }
console.log(admin.getName());
//Output: John
admin.setName('Jane');
console.log(admin.getName());
//Output: Jane
