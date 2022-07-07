"use strict";
//Default Parameter
const myFullName = (firstName, lastName = 'Smith') => {
    return `${firstName} ${lastName}`;
};
console.log(myFullName('John'));
//Output: John Smith
console.log(myFullName('John', 'Doe'));
//Output: John Doe
