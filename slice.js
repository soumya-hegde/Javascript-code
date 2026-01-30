const mobile = "9740411567";
console.log(`(${mobile.slice(0,2)}) ${mobile.slice(2,6)}-${mobile.slice(6)}`);
console.log("(" + mobile.slice(0,2) + ") " + mobile.slice(2,6) + "-" + mobile.slice(6));
console.log(mobile.slice(2,-1));
console.log(mobile.slice(0,-5));
let v =  mobile.slice(0,-5);
console.log(v);

let d = 0;
let i = true;
if(i == true){
    d = 10;
    console.log(d);
}

// Initialize an array
let arr = [5, 6, 7,8,9];
arr = arr.slice(1); 
// Create a new array without the first element
console.log(arr);

function countChar(str, char) 
{
  return str.split("G");
}

console.log(countChar('GeeksForGeeks', 'G'));