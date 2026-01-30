console.log("Index file");
const axios = require('axios');
const username = "soumya";
const url = `https://api.genderize.io/?name=${username}`;
console.log(url);

//callback functions passed as an arguement to another function, to be executed at a later point in time.
axios.get(url)
    .then((response) => {
        const result =  response.data;
        console.log(`The gender of ${username} is ${result.gender}`);
       // console.log(response)
    })
    .catch((err) =>{
        console.log(err);
    })
