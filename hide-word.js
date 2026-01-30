//get the hidden word which is in small case in the string
const str = "UAYcTYUHGaTYUtTUU"
let result = "";
//for(let char of str){
for( let i = 0; i<str.length; i++){
    if(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <=122){
    //if(str[i] === str[i].toLowerCase() && str[i]!== str[i].toUpperCase()){
        result += str[i];
    }
}
console.log(result);