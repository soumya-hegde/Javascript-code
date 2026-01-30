const fruits = ['mango', 'orange', 'banana'];
//ascending
for(let i = 0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}
console.log("============================");
//reverse 
for(let i = fruits.length - 1 ; i>=0; i--){
    console.log(i,fruits[i]);
}
console.log("============================");
//for of loop

for(let ele of fruits){
    console.log(ele);
}
console.log("============================");
//for of loop - reverse ( not recommended)
fruits.reverse();
for(let ele of fruits){
    console.log(ele);
}