//Enum

//Numeric Enum
enum Month {
  JAN = 1,
  FEB,
  MAR,
  APR,
  MAY,
}
console.log(Month.JAN);
//Output: 1

//String Enum
enum Month2 {
  JAN = "January",
  FEB,
}
console.log(Month2);
//Output: Enum member must have initializer.

enum Month3 {
  JAN = "January",
  FEB = "February",
}
console.log(Month3);
//Output: { 'JAN': 'January', 'FEB': 'February' }