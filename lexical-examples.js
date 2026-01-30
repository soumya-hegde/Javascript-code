function getVowels(arr){
    const vowels = "aeiou";
    const result = arr.filter(function(ele){
        return vowels.includes(ele);
    });
    return result;
}
console.log(getVowels(['a','b','c','e','i','k']));


// worksheet of scopes
let lang = 50;
function f(){
    lang = 75;
}
console.log("hi "+ lang);
f();
console.log("hi "+ lang);

function l(){
    country = "india";
    console.log(country);
}
l();


console.log("+++++");
function fh(){
     let e = "A";    
     function l(){
        let d = "B";
        console.log(e+d);
     }
     l();
     //console.log(e+d);
}
fh();


function g(){    
    let a = "india";
    console.log(a);
}
g();
//console.log(a);

var age = 30;
{
    var age = 40;
    console.log(age);
}
console.log(age);

for(let i =0;i<1;i++){
    console.log(i);
}
//console.log(i);\
{
const name = "A";
//name = "b";
console.log(name);
}
function b(){
//let c = 10;
   function a(){
    
    function d(){
        console.log(c);
    }
    let c = 20;
    d();
    
    }
    a();
    //console.log(c);
}
b();
