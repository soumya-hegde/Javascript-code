// toggle cases - 
const str = "rEaCT";
let result = "";
/*for(let char of str){
    if(char === char.toUpperCase()){
        result += char.toLowerCase();
    }else{
        result +=char.toUpperCase();
    }
}
console.log(result);*/

// for loop
for(let i = 0; i< str.length; i++){
    if(str[i] === str[i].toUpperCase()){
        result += str[i].toLowerCase();
    }else{
        result += str[i].toUpperCase();
    }
}
console.log(result);
