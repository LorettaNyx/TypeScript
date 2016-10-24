// Calculate n! = 1 * 2 * ... * n
let n: number = 6;
let result: number = 1;
let logable = n;
while (true) {
    if (n <= 1) {
        break;
    }

    result *= n;
    n--;
}

console.log(`${logable}! = ${result}`);
