// Calculate n! = 1 * 2 * ... * n
let n =6;
let result=1;
while(true){
    if(n===1){
        break;
    }
    result *= n;
    n--;
}
console.log(result);
