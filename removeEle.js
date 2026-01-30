//method -1 - pure function bcs we are not modifying the orignal array
function removeElem(arr, n){
    const res = arr.filter((ele)=>{
       return ele != n;
    });
    return res;
}
console.log(removeElem([10,20,30], 20));
console.log(removeElem([10,15,20,25,30,40], 25));

//method - 2  - splice makes it impure bcs returning the same array
function removeElem2(arr,n){
    const index = arr.indexOf(n);
    arr.splice(index, 1);
    return arr;

}
console.log(removeElem2([10,20,30], 20));

//method - 3
function removeElem3(arr,n){
    const res = arr.reduce((acc,cv)=>{
        if(cv !== n){
            acc.push(cv);
        }
        return acc;
    },[]);
    return res;
}
console.log(removeElem3([10,20,30], 20));