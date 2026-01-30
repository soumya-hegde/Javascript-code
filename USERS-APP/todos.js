const axios = require('axios');
const url = (`https://jsonplaceholder.typicode.com/users/1/todos`);
axios.get(url)
    .then((response)=>{
        const result = response.data;
//        console.log(result);
console.log("VERSION 1");
        console.log("Total Todos:", result.length);
        const completed_todo = result.filter(ele => ele.completed);
        console.log("Completed todo length:", completed_todo.length);
        const pending_todo = result.filter(ele => {
            return !ele.completed});
        console.log("Pending todo length:", pending_todo.length);
console.log("====VERSION 2====");
        console.log("==========LISTING COMPLETED TODOS:============");
        completed_todo.forEach(ele => console.log(ele.title));
        console.log("==========LISTING PENDING TODOS:==============");
        pending_todo.forEach(ele => console.log(ele.title));
       // console.log("PENDING TODO LIST:", pending_todo);
    })  
    .catch((err)=>{
        console.log(err);
    })