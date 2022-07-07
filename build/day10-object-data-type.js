"use strict";
let user = {
    name: "John",
    age: 24
};
console.log(user);
//Output: { name: 'John', age: 24 }
let user2 = {
    name: "John",
    age: 24,
    // address: '123 Main St',
    //Output : Object literal may only specify known properties, and 'address' does not exist in type 'User'.
};
