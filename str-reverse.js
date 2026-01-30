const str = "java";
// inbuilt method
console.log(str.split('').reverse().join(''));

//without methods
let result = "";
for(let i = str.length-1; i>=0; i--){
    result += str[i];
}
console.log(result);

// using reduce 
const reversed = str.split('').reduce((acc, char) => char + acc, '');
console.log(reversed);