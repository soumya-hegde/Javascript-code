function removeItem(arr,ele){
    const res = arr.indexOf(ele);
    console.log(res);    
    /*if(i == -1){
        return `element not found in the array`;
    }
    arr.splice(res,1);
    return arr;*/
  /* const result = arr.filter(val => {
      return val !== ele; 
   });
   return result;*/
   const result = arr.reduce((acc,cv) => {
      if(cv !== ele){
        acc.push(cv);
      }
      return acc;
   },[]);
   return result;
}
console.log(removeItem([10,20,30,40,50],30));