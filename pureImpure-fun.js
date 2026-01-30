//impure functions are the functions which gives different outputs for the same input
console.log("IMPURE FUNCTION")
const fruits = ['mango', 'orange'];
function addFruit(fruits,fruitName){
    fruits.push(fruitName);
    return fruits;
}
console.log(addFruit(fruits,'chikku'));
console.log(fruits);
console.log(addFruit(fruits,'chikku'));
console.log(addFruit(fruits,'chikku')); // these are same input, bcz of pass by reference fruits are getting updated each time.


// pure functions are the functions that return same output for the same inputs
//how to convert impure fun to pure fun
console.log("PURE FUNCTION");
const fruitss = ['mango', 'orange'];
function addFruit2(fruitss, fruitName){
    const newArr = [...fruitss];
    newArr.push(fruitName);
    // const newArr = [...fruitss, fruitName]; // fruitName will be added at the end
    return newArr;
}
console.log(addFruit2(fruitss,'chikku'));
console.log(addFruit2(fruitss,'chikku'));
console.log(addFruit2(fruitss,'chikku'));