const n = "12345";
let result = 0;
for(let i = 0; i<n.length; i++){
    result += Number(n[i]);
}
console.log(result);