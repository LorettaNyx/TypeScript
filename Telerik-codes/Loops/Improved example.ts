//Calculate and print the sum of the first N natural numbers
let limit = 10;
let currentNumber = 1;
let sum = 1;
console.log(`Starting number ${sum}`);
console.log("------------");

while(currentNumber<limit){
    currentNumber++;
    sum +=currentNumber;
    console.log(`Now we add the numbers from 1 to +${currentNumber}.The current sum is : ${sum}.`);
    console.log("------------");
}
console.log(`Final sum is ${sum}`);
