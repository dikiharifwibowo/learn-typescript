"use strict";
//Enum
//Numeric Enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
console.log(Month.JAN);
//Output: 1
//String Enum
var Month2;
(function (Month2) {
    Month2["JAN"] = "January";
    //FEB,
})(Month2 || (Month2 = {}));
console.log(Month2);
//Output: Enum member must have initializer.
var Month3;
(function (Month3) {
    Month3["JAN"] = "January";
    Month3["FEB"] = "February";
})(Month3 || (Month3 = {}));
console.log(Month3);
//Output: { 'JAN': 'January', 'FEB': 'February' }
