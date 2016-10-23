let n: number = 4;
let factorial: number = 1;

do {
    factorial *= n;
    n--;
} while (n > 0)

console.log(`${n}! = ${factorial}`);
