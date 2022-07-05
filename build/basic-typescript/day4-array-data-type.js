"use strict";
//Array
let array;
array = [1, 2, 3, 4, 5];
// Output: [1, 2, 3, 4, 5]
//array = [1, 2, 3, 4, 5, "string"];
// Output: Type 'string' is not assignable to type 'number'.
let array2;
array2 = ["string 1", "string 2", "string 3"];
// Output: ["string 1", "string 2", "string 3"]
//array2 =[1, 2, 3, 4, 5];
// Output: Type 'number' is not assignable to type 'string'.
let array3;
array3 = [1, 2, 3, "string", true, { name: "John" }];
console.log(array3);
// Output: [1, 2, 3, "string", true, {name: "John"}]
