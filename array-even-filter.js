//get the even elements from the array
const numbers = [10,11,12,13,14];
const result = [];
for( let i = 0; i<numbers.length; i++){
    if(numbers[i]%2 == 0){
        result.push(numbers[i]);
       // result += numbers[i];  - will not store in the array(concat will not happen)
    }
}
console.log(result);

//using functions expression
console.log("using functions");
const getEvens = function(arr){
    let result = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i] % 2 == 0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getEvens([1,2,3,4]));
console.log(getEvens([20,21,22]));
console.log(getEvens([1,3,5]));
console.log(getEvens([]));


//using arrow function
console.log("using arrow function");
const getEvens2 = (arr) => {
    let result = [];
    for(let i = 0;i  <arr.length;i++){
        if(arr[i] % 2 == 0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getEvens2([1,2,3,4]));
console.log(getEvens2([20,21,22]));
console.log(getEvens2([1,3,5]));
console.log(getEvens2([]));

//using arrow function - filter();
console.log("using arrow function filter");
const getEvens3 = (arr) => { 
    const res = arr.filter(num => num % 2 == 0);
        return res;
}
// const getEvens3 = arr => arr.filter(num=> num % 2 == 0);
console.log(getEvens3([1,2,3,4]));

//using (annonymous) function with filter();
console.log("using function- filter");
function getEvens4(arr){
    const result = arr.filter(function(ele){  // internally itfilter() has created the array, as conditions satisfies data will be pushed to array
        return ele % 2 == 0;  // returns boolean value
    });
    return result;
}
console.log(getEvens4([10,11,12,13,14]));

// positive value
console.log("Positive values- filter");
function allPositives(arr){
    const res = arr.filter(function(ele){
        return ele >= 0;
    });
    return res;
}
console.log(allPositives([1,2,3,-10,-5,7]));

// positive value - arrow function
console.log("Positive values- arrow filter");
const allPositives2 = (arr) => {
    const res = arr.filter(ele => ele>=0);
    return res;
}
//const allPositives2 = (arr) => arr.filter(ele => ele>=0);
console.log(allPositives2([1,2,3,-10,-5,7]));

// Strong Password
console.log(" Strong Password- filter");
function strongPassword(passwords){
    const res = passwords.filter(function(ele){
        return ele.length >= 8;
    });
    return res;
}
console.log(strongPassword(['secret', 'secret123', 'secret@123','pass123']));

//using normal for loop
function strongPassword2(passwords){
    let res = [];
    for(let i = 0; i<passwords.length; i++){
        if(passwords[i].length >= 8){
            res.push(passwords[i]);
        }
    }
    return res;
}
console.log(strongPassword2(['secret', 'secret123', 'secret@123','pass123']));

//using arrow function
console.log(" Strong Password- arrow + filter");
/*const strongPassword3 = arr => {
    const result = arr.filter(ele => ele.length >= 8);
    return result;
}*/
const strongPassword3 = arr => arr.filter(ele => ele.length >= 8);
console.log(strongPassword3(['secret', 'secret123', 'secret@123','pass123']));
