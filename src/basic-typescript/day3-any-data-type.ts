//Without any data type
let phoneNumber: number = 123456789;
phoneNumber = "+628123456789";
// Output: Type 'string' is not assignable to type 'number'.


//With any data type
let phoneNumber2: any = 123456789;

phoneNumber2 = "+628123456789";
console.log(phoneNumber2);
// Output: +628123456789

phoneNumber2 = true
console.log(phoneNumber2)
// Output: true
