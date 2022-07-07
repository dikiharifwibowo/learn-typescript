"use strict";
//Optional parameter
function optionalParameter(name, age) {
    return `${name} ${age}`;
}
console.log(optionalParameter('John'));
//Output: John undefined
console.log(optionalParameter('John', 24));
//Output: John 24
