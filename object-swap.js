// swap the given keys and objects
function swap(obj){
let result = {};
for(let key in obj){
    const newkey = obj[key], newValue = key;
    result[newkey] = newValue;
}
return result;
}
console.log(swap({green:'peace',blue:'tranquality'}));