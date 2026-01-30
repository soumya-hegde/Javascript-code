let a = 10, b = 20;
console.log("outside the function before invocation:",a,b);
function alter(a,b){
    console.log("inside the function before adding:",a,b);
    a = 100, b = 200;
    console.log("inside the function after adding:",a,b);
}
alter(a,b);
console.log("outside the function after invocation:",a,b);