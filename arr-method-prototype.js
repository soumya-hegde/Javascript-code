Array.prototype.first = function(){
    return this[0];
}
Array.prototype.last = function(){
    return this[this.length-1];
}
const fruits = ['cherry','custard apple','orange'];
console.log(fruits.first());
console.log(fruits.last());