//Sometimes abnormalities can be observed when using floating-point numbers
//    Comparing floating-point numbers can not be performed directly with the equals operators (== and ===)

let a = 0.1;
let b = 0.2;
let sum = 0.3;
let equal = (a+b === sum); // false!!!
console.log('a+b = '+ (a + b) + ', sum = ' + sum + ', sum === a+b? is ' + equal);
