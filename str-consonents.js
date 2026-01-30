const str = "javascript";
const vowels = "aeiou";
let result = "";
for(let i = 0; i < str.length; i++){
    if(!vowels.includes(str[i])){
        result += str[i]; 
    }
}
console.log(result);