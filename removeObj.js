const employees = [
    {id:1,name:'surya'},
    {id:2,name:'Bhanu'},
    {id:3,name:'Bhaskar'},
    {id:4,name:'Mitra'}]
function removeEmployee(employees, id){
    const res = employees.filter((ele)=>{
        return ele.id !== id;
    });
    return res;
}
console.log(removeEmployee(employees, 3));