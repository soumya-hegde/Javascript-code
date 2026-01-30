//take out the string present in the array
const arr = [1, 'a', 2, 'b', 3, 'c'];
let str = "";
for(let i = 0;i<arr.length;i++){
    if(typeof arr[i] == 'string'){
        str += arr[i];
    }
}
console.log(str);

// using filter
str = arr.filter(num => typeof num == 'string').join('');
    console.log(str);
