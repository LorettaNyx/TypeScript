//Calculate and print the sum of the first N natural numbers
let limit: number = 10;
let currentNumber: number = 1;
let sum: number = 1;

console.log(`Initial sum ${sum}`);

while (currentNumber < limit) {
    currentNumber++;
    sum += currentNumber;
    console.log(`+${currentNumber}`);
}

console.log(`Final sum ${sum}`);
