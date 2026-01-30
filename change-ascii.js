//if the ascii character code is even then uppercase the character
const str = "abcdkjhg";
let result = "";
for(let i = 0; i<str.length;i++){
    //if(str[i].charCodeAt() % 2){ // truthy values  - gives as 1 
    if(str[i].charCodeAt() % 2 == 0){  //falsy values - gives as 0
        result +=str[i].toUpperCase();
    }else{
        result +=str[i];
    }
}
console.log(result);