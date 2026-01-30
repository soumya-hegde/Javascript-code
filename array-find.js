console.log("find greater");
function findGreater(arr, n){
    let result;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > n){
            result = arr[i];
            break;
            // return arr[i];
        }
    }
    return result;
}
console.log(findGreater([10,15,20,25,30],22));

// Using find();
console.log("using find() - find greater");
function findGreater2(arr,n){
    // const res = arr.find(function(ele){
    //     return ele > n;
    // });
    // return res;
    return arr.find(function(ele){
        return ele > n;
    });
}
console.log(findGreater2([10,15,20,25,30],22));

//Using find(); - arrow function
console.log("using find() + arrow() - find greater");
const findGreater3 = (arr,n) =>{
    const result = arr.find(ele => ele > n);
    return result;
}
//const findGreater3 = (arr,n) => arr.find(ele => ele > n);  
console.log(findGreater3([10,15,20,25,30],22));

//find the first string
console.log("first string");
function firstStr(arr){
    return arr.find(function(ele){
        return typeof ele == 'string'; 
    });
}
console.log(firstStr([1,2,3,'d','c','t']));

//find the first string - using arrow 
console.log("first string - using arrow");
const firstStr1 = (arr) => arr.find(ele => typeof ele == 'string');
console.log(firstStr1([1,2,3,'d','c','t']));