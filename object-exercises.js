// return keys from the object and return the array
// without using the method
console.log("extract the keys");
function getKeys(obj){
    const result = [];
    for(let key in obj){
        result.push(key);
    }
    return result;
}
console.log(getKeys({a:1,b:2,c:3}));

// using the method
console.log("using the method return keys");
function getKeys2(obj){
    return Object.keys(obj);
}
console.log(getKeys2({a:1,b:2,c:3}));

// extract the values
// without using the method
console.log("extract the values");
function getValues(obj){
    const result = [];
    for(let key in obj){
        result.push(obj[key]);
    }
    return result;
    //return Object.values(obj); // using the method
}
console.log(getValues({a:1,b:2,c:3}));

//check the element is present or not
console.log("check the key element");
function checkProp(obj,n){
   // return n in obj;
    return obj.hasOwnProperty(n);
}
console.log(checkProp({a:1,b:2},'a'));
console.log(checkProp({a:1,b:2},'z'));

//using for in loop
console.log("check the key element- using for in loop");
function checkProp2(obj,n){
    // for(let key in obj){  // only checks till it satisfies the condition, it wont loop through all the values.
    //     return key == n;
    // }
    for (let key in obj) {
        if (key === n) {
            return true;
        }
    }
    return false;
}
console.log(checkProp2({a:1,b:2},'a'));
console.log(checkProp2({a:1,b:2},'b'));

//build pairs
console.log("Build Pairs");
function buildPairs(str){
    const result = {};
    for(let char of str){
        result[char] = char.toUpperCase();
        //result[char.toUpperCase()] = char;
    }
    return result;
}
console.log(buildPairs('dct'));

//charAscii
console.log("charAscii");
function charAscii(str){
    const result = {};
    for(let char of str){
        result[char] = char.charCodeAt();     
    }
    return result;
}
console.log(charAscii('abc'));

// string length 
console.log("string Length");
function strLength(arr){
const result = {};
    for(let ele of arr){
        result[ele] = ele.length;
    }
    return result;
}
console.log(strLength(['abc','ab','a','abcd']));

// using reduce 
console.log("string Length - using reduce");
const strLength2 = (arr) => {
    //const result = {};
    const result = arr.reduce((acc,cv) =>{
       acc[cv] = cv.length;
       return acc;
    },{})
    return result;
}
console.log(strLength2(['abc','ab','a','abcd']));

//Filter the products
console.log("Filter the products");
const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1200 },
  { id: 5, name: "Mouse", price: 800 }
];
// function filterProducts(products){
//     const result = products.filter(ele => ele.price >= 10000);
//     return result;
// }
function filterProducts(products){
    let result = [];
    for(let ele of products){
        if(ele.price >= 10000){
            //result[ele] = ele; //wrong
            result.push(ele);          
        }
    }
    return result;
}
console.log(filterProducts(products));

//max element in the array
console.log("Max Value");
function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([100,50,60,125,1,10]));

// return the key with the maximum value
console.log("Max Key");
function findMaxKey(obj){
    const val = Object.values(obj);
    let maxKey = null;
    let max = -Infinity;
    for(let key in obj){
        if(max < obj[key]){
            max = obj[key]
            maxKey = key;           
        }  
    }
    return maxKey;
}
console.log(findMaxKey({a:1,b:20,c:3}));   //b

console.log("findRepeat");
function findRepeat(str) {
    const result = {};
    for (let char of str) {
        result[char] = (result[char] || 0) + 1;
       // result[char]++; //NaN
    }
    return result;
}
console.log(findRepeat('aassddadvv'));

//using some()
console.log("USING SOME- EVEN NUMBERS");
const arr = [1,2,34,5,6];
let result = arr.some(ele => ele%2 ==0);
console.log(result);


console.log("Build Pairs");
function buildPairs(str){
    const result = {};
    let j = {};
    for(let i = 0; i<str.length;i++){
        j = i+1;
      //  j.y = i+2;
        result[str[i]] = j;
        //result[char.toUpperCase()] = char;
    }
    return result;
}
console.log(buildPairs('dct'));