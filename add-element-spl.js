//add the element in the given index and move the next elements, without using splice or creating the new array

function addEle(arr,ele,index){
    for(let i = arr.length; i>index;i--){
        arr[i] = arr[i-1];               
    }
    arr[index] = ele;
    return arr;
}
console.log(addEle([10,20,30,40],100,2));