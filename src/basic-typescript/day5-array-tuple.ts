//Array Tuple
let biodata: [string, number];
biodata = ["John", 23];
// Output: ["John", 23]

biodata = [23, "John"];
// Output: Type number is not assignable to type string.

biodata = ["John"];
// Output: Source has 1 element(s) but target requires 2.

biodata = ["John", 23, true];
// Output: source has 3 element(s) but target  allows only 2.
