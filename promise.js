//promise producing code 
//create a promise object -which return's a number
const myPromise = new Promise((resolve, reject) =>{  //these are callback functions - bcs functions passed as a argument to another function
    //console.log(typeof resolve, typeof reject) function function
    const number = 10;
    if(number % 2 === 0){
        resolve(); //invoke the function - which is then()
    }else{
        reject(); // invokes catch()
    }
});

//promise consuming code
myPromise
    .then(() =>{
        console.log('even number')
    })//if the number is even - fulfoll(resolve) the promise
    .catch(()=>{
        console.log('odd number')
    }) //if the number is odd- reject the promise 


//create a promise object which determines the length of the passwrd
//if the passsword length 8 characters and more resolve the promise
//else reject the promise

const passwordPromise = new Promise((resolve, reject) =>{

    const password = "secret@123";
    if(password.length >=8){
        resolve();
    }else{
        reject();
    }
});

passwordPromise
    .then(()=>{
        console.log('Promise resolved');
    
    })
    .catch (()=> {
        console.log('promise rejected')
    });

    //create a promise object - which returns a number
    const myPromise1 = new Promise((resolve, reject) => {
        const number = Math.round(Math.random()*100);
        if(number % 2 === 0){
            resolve(number);
        }else{
            reject(new Error(`Error: ${number} is odd`)); //reject the promise with error
        }
    });

    //promise consuming code
    myPromise1.then((n) =>{
        console.log('even number', n)
    })// if the number is even - fulfill (resolve) the promise
    .catch((err)=> {
        console.log(err.message)
    })//if the number is odd - reject the promise

    //
    const match = new Promise((resolve, reject) =>{
        let indiaWon;
        setTimeout(() =>{
            indiaWon = true;
            if(indiaWon){
                resolve('india wins by 50')
            }else{
                reject(new Error('australia wins by 8 wickets'));
            }
        }, 4000);
            
        });
    
    match
        .then((result) => {
            console.log(result);
        }).catch((err)=>{
            console.log(err.message);
        })