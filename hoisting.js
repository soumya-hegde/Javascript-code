//Function declaration get hoisted. 
greet();
function greet(){
    console.log("HI");
}

//function expressions are not hoisted
// sayHi();   // here var sayHi is undefined, invoking undefined function will throw error
// var sayHi = function(){
//     console.log("hi");
// }

//var x = 5;
a();
function a(){
    console.log('Inside',x);
    var x = 10;
}
//var x = 10;

//console.log(x);

