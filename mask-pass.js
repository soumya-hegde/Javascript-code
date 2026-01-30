//Mask the Pass word 
const password = "secret123";
let result = "";
for(let i = 0; i < password.length; i++){
    result += "*";
}
console.log(result);