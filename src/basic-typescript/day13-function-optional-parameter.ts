//Optional parameter
function optionalParameter(name: string, age?: number) {
  return `${name} ${age}`;
}
console.log(optionalParameter('John'));
//Output: John undefined

console.log(optionalParameter('John', 24));
//Output: John 24