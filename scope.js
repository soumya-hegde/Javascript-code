const city = "Bangalore"; // global scope
function print(){  // function scope
    let name = "xyz";
    if(true){  //block scope
        var msg = "Hi There";
        console.log('inside block', msg, name);
    }
    console.log('outside block', msg);  // eventhough variable is declared inside the block, var key is used so outside the block and inside the function, variable can be used. 
    //NOTE: var keyword is polluting the function scope here, so let and const is introduced.
}
print();

//other example
console.log("Example 1");
{
    var msg = "Hi There";
}
console.log(msg);

console.log("Example 2");
for(var i = 0; i<=3; i++){  
    console.log(i);
}
console.log('outside',i);// var is functioned scoped

//lexical scope - inner functions have access to variables in their outer scope
console.log("LEXICAL SCOPE");
function fnOne(){
    const city = "Bangalore";
    function fnTwo(){
       // var loc = "Basav";  
        console.log("Function Two", city);
    }
    fnTwo();
    //console.log("Function Two", loc); --doesnt work
}
fnOne();

//example
console.log("LEXICAL SCOPE  - example 1");
function fnOne(){
    const city = "Bangalore";
    const loc = "Basavangudi";  
    function fnTwo(){
        console.log("Function Two", city);
        function fnThree(){
            console.log("Function Three",loc,msg);
        }
        fnThree();
    }
    fnTwo();
}
fnOne();

console.log("LEXICAL SCOPE  - example 2 - lexical scopes with block scope");
function fnOne(){
    const city = "Bangalore";
    const loc = "Basavangudi";  
    if(true){
        var msg = "Hi There";
    }
    function fnTwo(){
        console.log("Function Two", city);
        function fnThree(){
            if(true){
                var msg2 = "Hi Bye";
            }
            console.log("Function Three",loc,msg);
            console.log("Function Three",msg2);
        }
       //  console.log("Function Three",msg2); // - wont work msg2 is inside the fn3
        fnThree();
    }
    fnTwo();
}
fnOne();

// shadowing
//here ban is shadowed by the mys
console.log("Shadowing");
let city2 = "Ban";
    function b(){
        let city2 = "Mys"; 
        console.log(city2);
    }
console.log(city2);
b();
console.log(city2);
