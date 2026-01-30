//remove the element from the array without using indexof, splice or the pop or creating the new array

function removeEle(arr,index){
    for(let i = index; i<arr.length-1;i++){
        arr[i] = arr[i+1]; 
    }
    arr.length = arr.length-1;
    return arr;
}
console.log(removeEle([10,20,30,40,50], 2));
 
