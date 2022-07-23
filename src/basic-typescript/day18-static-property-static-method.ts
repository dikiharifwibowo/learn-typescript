class Users {
  static firstName: string = 'John';
  static lastName: string = 'Doe';

  static getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let firstName = Users.firstName;
let lastName = Users.lastName;
console.log(`first name: ${firstName}, last name: ${lastName}`);
//Output: first name: John, last name: Doe
let fullNameUser = Users.getFullName();
console.log(`full name: ${fullNameUser}`);
//Output: full name: John Doe