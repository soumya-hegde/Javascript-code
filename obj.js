//create an object  which has 2 key alue pairs
const obj = {a:1, b:2};
console.log(typeof obj);
console.log(Array.isArray(obj));
//add another key c with value 3
obj.c = 3;
console.log(obj);
//update the value of the key b with 20
obj.b = 20;
console.log(obj);
//remove the key a from the object
delete obj.a;
console.log(obj);
const obj2 = [{a:1, b:2},{a:3, b:5}];
console.log(obj2);
obj2[1].c = 3;
console.log(obj2);

//
const obj1 = {a:1,b:2};
const obj3 = {};
//extract the keys
console.log(Object.keys(obj1));

//object update
console.log("OBJECT UPDATE");
const cart = [{id:101,name:"m",qty:1},{id:102,name:"m",qty:2}];
//update the quantity by 1 whre id is 102
const product = cart.find(ele => ele.id == 102);
console.log(product);
product.qty++;
console.log(product);
console.log(cart);

//UPDATE ARRAY OF NUMBERS
console.log("UPDATE ARRAY OF NUMBERS");
const arr = [1,2,3,4,5];
const a1 = 6;
console.log(a1);
arr[2] = a1;
arr[4] = 10;
console.log(arr);

