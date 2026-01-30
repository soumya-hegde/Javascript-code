// count the character frequencies 
console.log("COUNT THE CHARACTERS")
function repeatingChar(str){
    let result = {};
    let res = {}
    for(let char of str){
        if(char in result){
            result[char] += 1; 
        }else{
            result[char] = 1;
        }
        //res[char] = result
        //console.log(result[char],"result",result)
    }
    return result;
}
console.log(repeatingChar("aabbcdda"));

// count the character frequencies and find the non- repeating
console.log("COUNT THE NON- REPEATING CHARACTERS");
function repeatingChar2(str){
    let result = {};
    for(let char of str){
        if(char in result){
            result[char] += 1; 
        }else{
            result[char] = 1;
        }
    }
    const output = {};
    for(let char of str){
    if(result[char] == 1){
        //output.push(result[char]);
        output[char] = result[char];
    }
}
return output;
}
console.log(repeatingChar2("aabbccddaeg"));

//count the repeating characters
console.log("REPEATING CHARACTERS:");
const repeatingChar3 = (arr => {
    let result = {};
    for(let char of arr){
        if(char in result){
            result[char] += 1;
        }else{
            result[char] = 1;
        }
    }
    const res = {};
    for(let char of arr){
        if(result[char] > 1){
            res[char] = result[char];
        }
    }
    return res;

})
console.log(repeatingChar3("aabbccddaeg"));

//SUM OF THE VALUES FROM THE OBJECT
console.log("SUM THE VALUES");
 function total(cart){
    let result = 0;
    let val = Object.values(cart);
    for(let i=0;i<val.length;i++){
        result+=val[i];
    }
    for(let key in cart){
        result += cart[key];
    }
    return result;
 }
 console.log(total({marker:50,scale:25,box:100}));

 //OR 
 console.log("sum of the values in different way");
 function total2(cart){
    let val = Object.values(cart);
    let result = val.reduce((acc, cv) => acc + cv,0);
    return result;
 }
console.log(total2({marker:50,scale:25,box:100}));

let tools = ["abc","add", "dsds"];
let result = tools.filter(n=>{
    return n === "abc"});
console.log(result);

let tools2 = ["abc","add", "dsds"];
console.log(tools.filter(n =>  n === "abc"));
console.log([100].reduce((a,b) => a+b));