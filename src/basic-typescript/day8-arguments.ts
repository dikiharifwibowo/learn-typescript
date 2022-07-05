function getFullName(firstName: string, lastName: string): string {
    return `Hallo my name is: ${firstName} ${lastName}`;
}
console.log(getFullName("John", "Doe"));
//Output: Hallo my name is: John Doe

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));
//Output: 3

function getFullNameAndAge(firstName: string, lastName: string, age: number): any {
    return 24;
}
