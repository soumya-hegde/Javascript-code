const axios = require('axios');
const id = 2;
axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((response) => {
    const result = response.data;
    console.log(result);
    console.log(`
        username: ${result.username},
        email:${result.email}, 
        city:${result.address.city},
        [lang, lat]:${result.address.geo.lat},${result.address.geo.lng},
        website:${result.website}`)
})
.catch((err) =>{
    console.log(err);
})
//if the data is not present in the array or the json then it gives error with 404