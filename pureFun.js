const items = ["Apple","mango","onion"];
function addItems(items,newItem){
    const newArr = [...items];
    newArr.push(newItem);
    return newArr;
}
console.log(addItems(items,"bread"));
console.log(items);


function removeItems(items,remItem){
    // const newArr = [...items];
    // const index = items.indexOf(remItem);
    // newArr.splice(index,1)
    // return newArr;
    const newArr = items.filter((ele)=>{
        return ele !== remItem;
    });
    return newArr;
}
console.log(removeItems(items,"mango"));
console.log(items);


function updateItems(items,updateItem){
    const newArr = items.map((ele)=>{
        if(ele === updateItem){
            return ele.toUpperCase();
        }else{
            return ele;
        }
    });
    return newArr;
}
console.log(updateItems(items,"mango"));
console.log(items);

  
