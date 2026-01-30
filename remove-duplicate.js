const str = "aabbcdabc";
let result = "";
for(let i = 0; i<str.length; i++){
    if(!result.includes(str[i])){
        result += str[i];
    }
} 
console.log(result);

const str1 = [1,1,2,3,4,2];
let result1 = [];
for(let i = 0; i<str1.length; i++){
    if(!result1.includes(str1[i])){
        result1.push(str1[i]);
    }
} 
console.log(result1);

//using indexOf()
/*for(let i = 0; i<=str.length-1; i++){
    if(result.indexOf(str[i]) === -1){
        result += str[i];
    }
} 
console.log(result);*/

/*for(let i = 0; i<str.length-1; i++){
    if(result.includes(str[i])){
        continue;
    }else{
        result += str[i];
    }
}
console.log(result);*/


/*
for(let i = 0; i<str.length-1; i++){
    let flag = false;
    for(let j = 0; j<str.length-1; j++){
        if(str[i]===str[j]){
            flag = true;
            break;
        }
    }
    if(!flag){
    result += str[i];
    }
}
console.log(result);*/
if(true){
    let x = 10;
    console.log(x);
}
