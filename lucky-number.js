/* Lucky Number
x in a array is repeated x times then its called a lucky number, if an array has more than one lucky number return the highedt lucky number, if there is no lucky number than return -1

[1,2,2,3,3,3]=>3
[2,2,3,3,4,4]=>2
[2,3,3,4,4,4]=>-1
*/
console.log(luckyNumber([2,2,3,3,4,4]));
function luckyNumber(arr){
    let res = {};
    let resarr = [];
    for(let val of arr){
        if(val in res){
            res[val] += 1;
        }else{
            res[val] = 1;
        }
    }
    console.log(res);
    for(let key in res){
        if(Number(key) == res[key]){
            resarr.push(key);
        }
    }
    
    if(resarr.length>=1){
    let max = resarr[0];
    for(let i=0;i<resarr.length;i++){
        if(max<resarr[i]){
            max=resarr[i];
        }
    }
    return max;
    }
    return -1;
}

console.log(luckyNumber([1,2,2,3,3,3]));
console.log(luckyNumber([2,3,3,4,4,4]));