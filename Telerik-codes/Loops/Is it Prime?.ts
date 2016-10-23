
let number: number = 4;
let divider: number = 2;
let maxDivider: number = Math.sqrt(number);
let isPrime: boolean = true;

while (isPrime && (divider <= maxDivider)) {
    if (number % divider == 0) {
        isPrime = false;
    }

    divider++;
}
console.log(isPrime);
