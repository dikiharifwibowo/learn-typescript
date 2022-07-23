"use strict";
class Users {
    static getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
Users.firstName = 'John';
Users.lastName = 'Doe';
let firstName = Users.firstName;
let lastName = Users.lastName;
console.log(`first name: ${firstName}, last name: ${lastName}`);
//Output: first name: John, last name: Doe
let fullNameUser = Users.getFullName();
console.log(`full name: ${fullNameUser}`);
//Output: full name: John Doe
