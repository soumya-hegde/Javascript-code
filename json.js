//create the new obj and assign the p1 - nested deep copy
const p1 = {id:1,name:"steve"};
const p3 = JSON.stringify(p1);
console.log(p3);
const p4 = JSON.parse(p3);
console.log(p4);
const p2 = JSON.parse(JSON.stringify(p1));
console.log(p2);
