//Function as Type

type add = (val1: number, val2: number) => number;

const addTwoData: add = (val1: number, val2: number): number => val1 + val2;

console.log(addTwoData(2,5));
//Output: 7