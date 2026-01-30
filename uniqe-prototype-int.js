//Return the unique elements using the unique() in js --- in js unique() inbuilt property is not there so have to create the prototype then can use
const UniqueEle = function(arr){
    this.arrele = arr;
}
UniqueEle.prototype.unique = function(){
    const result = this.arrele.filter((ele,i) => {
        return this.arrele.indexOf(ele) == i;
    });
    return result;
}
const res = new UniqueEle([10,20,10,20,30]);
console.log(res.unique());
