//Function

function getFirstName(): string {
  return "Hello, my name is John";
}

function getLastName(): string {
  return "Doe";
  //return 23;
  //Output: Type 'number' is not assignable to type 'string'.
}

function getAge(): number {
  return 24;
}

function setFullName(): void {
  console.log("No return value");
}
setFullName();


