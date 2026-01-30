// add 5 to each element
function arrMap(arr){
    const res = arr.map(function(ele){
        return ele + 5;
    });
    return res;
}
console.log(arrMap([10,11,12,13,14]));

// 
console.log("get 1st letter");
function firstStr(names){
    const res = names.map(function(ele){
        return ele[0] + ele.at(-1);
    });
    return res;
}
console.log(firstStr(['dravid','sachin','zaheer']));

//add 2 to every even number
console.log("add 2 to every even number")
const arr = [10,11,12,13,14];
const result = arr.map(function(ele){
    if(ele % 2 == 0){
        return ele + 2;
    }else{
        return ele;
    }
});
console.log(result);