//Sum of the array
console.log("sum of the array");
function addArray(arr){
const res = arr.reduce(function(acc,cv){
    return acc + cv;
}, 0);
return res;
}
console.log(addArray([10,20,30,40]));
//console.log(addArray([]));

//Sum of the array- using arrow
console.log("sum of the array - arrow");
const addArray2 = arr => {
    const result = arr.reduce((acc,cv) => acc+cv,0);
    return result;
}
console.log(addArray2([10,20,30,40]));

//length of the array 
console.log("length of the string in the array");
function arrString(arrStr){
const result = arrStr.reduce(function(acc,cv){
    return acc + cv.length;
}, 0);
return result;
}
console.log(arrString(['abc','de','fghi']));

//length of the array - arrow
console.log("length of the string in the array - arrow");
const arrString2 = (arrStr) => {
const result = arrStr.reduce((acc,cv) => acc + cv.length,0);
    return result;
}
console.log(arrString2(['abc','de','fghi']));

//
console.log("sum of the array");
function carTotal(arr){
    const res = arr.reduce(function(acc,cv){
        return acc + cv;
    });
    return res;
}
console.log(carTotal([45,45,60]));

//sum of the array & string
console.log("sum of the array & string");
function carTotal2(arr){
    const res = arr.reduce(function(acc,cv){
        return acc + parseInt(cv);
    },0);
    return res;
}
console.log(carTotal2([45,'45',60]));


console.log("even of the array");
function getEvens(arr){
    let result = [];
    const res = arr.reduce(function(acc,cv){
        if(cv % 2 == 0){
            acc.push(cv);   // result = acc.push(cv); - we cannot do because push() returns the length within the loop- 
        }
        return acc;
    },[]);
    return res;
}
console.log(getEvens([10,11,12,13,14,15]));
