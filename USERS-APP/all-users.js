const axios = require('axios');
const url = "https://jsonplaceholder.typicode.com/users"
/*using axios make a request to the server
2. once fulfilled,
*first console.log to see the response
*/
axios.get(url)
    .then((response) =>{
        const users = response.data;
//        console.log(users);
        console.log("Total users:", users.length);
        users.forEach((ele) =>{
            console.log(ele.username)
        });
    })
    .catch((err) =>{
        console.log(err);
    })
