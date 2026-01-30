const isUpper = (str) =>{
    const res = str.map(i=>i+2);
    return res;
}
console.log(isUpper([1,2,3]));

const car = [{prodid:101,name:"xyz"},{prodid:102,name:"xyuz"}];
const product = car.find((ele) => {
    return ele.prodid = 211;
})
console.log(car);


function age(arr){
    let res = [];
    for(let key of arr){
        if(key.age>25){
            res.push(key.name);
        }
    }
    return res;
}
console.log(age([{name:"xyz",age:40},{name:"abc",age:4},{name:"ghj",age:40}]));