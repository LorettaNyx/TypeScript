//Parsing String to Number
  //  Strings can be parsed to numbers
    //    Floating-point and rounded (integer)
    //The trivial way to parse string to a number is using the functions parseInt and parseFloat:
let numberString = '123'
console.log(parseInt(numberString)); // prints 123
let floatString = '12.3';
console.log(parseFloat(floatString)); // prints 12.3

//    parseInt and parseFloat exhibit stranger behaviour:
  //      If a non-number string starts with a number, only the number is extracted:

let strr = '123Hello';
console.log(parseInt(strr)); // prints 123
