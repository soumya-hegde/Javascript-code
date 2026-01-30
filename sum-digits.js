let n = 12345;
let sum = 0;
let result = 0;
while(n>0){
    sum = n % 10;
    result += sum;
    n =  Math.floor(n / 10);
    //n = n/10;
}
console.log(parseInt(result));
