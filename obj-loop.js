const obj = {a:1, b:2, c:3};
//for in
for(let key in obj){
    console.log(key, obj[key]);
   // console.log(key, obj.key); // undefined
}

const prop = 'b'
console.log(obj.prop);//undefined
console.log(obj['prop']);//undefined
console.log(obj[prop]);// here it refers to object obj and will fetch the data from obj- obj['b']

/* access every key in the object*/
const student = {
    name:'rahul',
    age:'23',
    email:'rahul@gmail.com',
    course:'full stack development course'
}
for(let key in student){
    console.log(`${key} : ${student[key]}`);
}

const arr = [1,2,4,5,6];
Object.keys(arr).forEach((key) => {
    console.log(key, arr[key]);
})

// passing the string convert it to an object and get the string index as key
console.log("GET STRING INDEX");
const str = "dct";
const res = {};
for(let i = 0; i<str.length; i++){
    res[i] = str[i];
}
// for(let ele of str){
//     res[ele] = str[ele];
// }
console.log(res);

console.log("CHECK EACH CHARACTER VOWEL OR NOT");
function checkvowl(str){
    const result = {};
    let vowels = "aeiouAEIOU";
    for(let i = 0; i<str.length;i++){
        if(vowels.includes(str[i])){
            result[str[i]] = true;
        }else{
            result[str[i]] = false;
        }
    }
    return result;
}
console.log(checkvowl("react"));


console.log("CHECK EACH CHARACTER VOWEL OR NOT");
function checkvowl2(str){
    
    let vowels = "aeiouAEIOU";
    const index = "index";
    const isvowel = "isvowel";
   // const res = {};
    const res2 = {};
    let result = {};
    let res = {};
    for(let i = 0; i<str.length;i++){
    const res = {};
        if(vowels.includes(str[i])){
            // res = i;
           res[index] = i;
           res[isvowel] = true;
        }else{
            // res = i;
            res[index] = i;
            res[isvowel] = false;            
        }
       // console.log("res",res);
       // console.log("result", result[str[i]], "res", res)
        result[str[i]] = res;
        
      //  res2[str[i]] = result;

       // console.log("result", result[str[i]], "res", res)

    }
    console.log(Object.keys(result).length);
    return result;
}
console.log(checkvowl2("react"));
// {"r": {index:0, isVowel:false}}

// console.log("CHECK EACH CHARACTER VOWEL OR NOT");
// function checkvowl3(str) {
//     const result = {};
//     let vowels = "aeiouAEIOU";
//     const index = "index";
//     const isvowel = "isvowel";

//     for (let i = 0; i < str.length; i++) {
//         const res = {};
//         res[index] = i;
//         res[isvowel] = vowels.includes(str[i]);
//         result[str[i]] = res;
//     }

//     return result;
// }

// console.log(checkvowl3("react"));
