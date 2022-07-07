export class User {
  constructor(public name: string, public age: number) {}
}

let user = new User('John', 24);
console.log(user);
//Output: { name: 'John', age: 24 }