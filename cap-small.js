//capital letters followed by small 
const str = "jAvAScRIpt"
let result = "", capWord = "", smallWord = "";
//for(let char of str){
for( let i = 0; i<str.length; i++){
    if(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <=122){
    //if(str[i] === str[i].toLowerCase() && str[i]!== str[i].toUpperCase()){
        smallWord += str[i];
    }else{
        capWord += str[i];
    }
}
result = capWord + smallWord;
console.log(result);