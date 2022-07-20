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
    constructor(phone, name, age) {
        super(name, age);
        this.phone = phone;
        this.name = name;
        this.age = age;
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
let admin = new Admin('08134567890', 'John', 24);
console.log(admin.phone);
//Output: 08134567890
