const username = "raj", email = "raj@gmail.com";
const user = {
    username : username,
    email: email
};
console.log(user);
//es6 feature - consise property (short hand property)
//when the prperty name and variable is same, omit property
const person = { username, email};
console.log(person);