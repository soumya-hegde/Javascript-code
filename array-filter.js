//Find truthy values
function truthy(values){
    const result = values.filter(function(ele){
     //return ele !== ('' && 0 && false && undefined && NaN && null) // try with each element
        return Boolean(ele);
        //return ele; // It is the predicate function so implicitly it will returns the truthy values
    });
    return result;
}
console.log(truthy([false, true, 0, 1 , undefined, NaN, 'dct', '', [], [10]]));

// even number
const isEven = function(ele){
    return ele % 2 == 0;
}
console.log(isEven([10,12,14,15]));
console.log(isEven(10));


const arr = [1,2,3,4];
let a = arr;
console.log("a:",a);
const result = arr.forEach(num => console.log(num*2));
console.log(result);
let val = console.log(arr.slice(1,3));
console.log(val);