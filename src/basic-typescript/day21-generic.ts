function identity<T>(value: T): T {
  return value;
}

const result = identity<number>(123);
console.log(result);
//Output: 123
console.log(result.length);
//Output: Property 'length' does not exist on type 'number'.

const result2 = identity<string>("Hello");
console.log(result2);
//Output: Hello
console.log(result2.length);
//Output: 5