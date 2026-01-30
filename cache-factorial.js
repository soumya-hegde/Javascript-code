function factorial(n){
    //check if the imput parameter is present as a key in cache 
    if(n in factorial.cache){
        return factorial.cache[n];
    }
    let result = 1;
    for(let i = n;i>0; i-- ){
        console.log('loading...');
        result = result * i;
    }
    //before return result, update the cache
    factorial.cache[n] = result;
    return result;
}
console.log(typeof factorial); // function -> special objects in javascript - can have properties & methods
console.log(factorial.length); // number of parameter for the function
factorial.cache = {};


console.log(factorial(5)); 
console.log(factorial(5)); 
console.log(factorial.cache);
console.log(factorial(6)); 
console.log(factorial(5)); 
