//Default Parameter
const myFullName = (firstName: string, lastName: string = 'Smith'): string => {
  return `${firstName} ${lastName}`;
}

console.log(myFullName('John'));
//Output: John Smith
console.log(myFullName('John', 'Doe'));
//Output: John Doe