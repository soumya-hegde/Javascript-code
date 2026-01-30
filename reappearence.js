const arr1 = [5,10,15,20,25];
const arr2 = [1, 2, 5, 5, 10, 20, 20, 20, 25, 25,20, 10];
for(let i=0; i<arr1.length;i++){
    let count = 0;
    for(let j = 0; j<arr2.length;j++){
        if(arr1[i] == arr2[j]){
            count++
        }
    }
    console.log(`${arr1[i]} appears ${count}  times`);
}
/*console.log(resarr);
for(let ele of resarr){
    if(ele in res){
        res[ele] += 1;
    }else{
        res[ele] = 1;
    }
}
console.log(res);*/
