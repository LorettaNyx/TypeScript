//Calculating the product of all numbers in the interval [n..m]:
let n = 4;
let m = 10;
let number = n;
let product = 1;

do {
    product *= number;
    number++;
} while (number <= m)

console.log(`product[${n}..${m}] = ${product}`);
