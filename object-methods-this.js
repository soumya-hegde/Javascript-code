const person = {
firstName:'Punith', lastName:'Raj',fullName:function(){
    return `${this.firstName} ${this.lastName}`;
    //return `${person.firstName} ${person.lastName}`;  - not preferable
}
}
console.log(person.fullName());

//Examples
console.log("EXAMPLE -1");
const player = {
    name:'virat',
    country:'India',
    runs:[50,40,60],
    matchesPlayed: function(){
        return this.runs.length;
    },
    totalRuns: function(){
        const total = this.runs.reduce((acc,cv) => {
            return acc+cv;
        }, 0);
        return total;
    },
    avg:function(){
        const result = this.totalRuns()/this.matchesPlayed();
        return result;
    }
}
console.log("total matches:",player.matchesPlayed());
console.log("total Runs:",player.totalRuns());
console.log("avg:",player.avg());

//this in function()
console.log("THIS IN FUNCTION");
function f1(){
    console.log(this);
}
f1();
const f2 = function(){
    console.log(this);
}
f2();
//arrow functions borrow this value from the outer scope
console.log("ARROW FUNCTIONS")
const f3 = () => {
    console.log(this);
}
f3();
//ex 2
function f4(){
    const f5 = () =>{
        console.log(this);
    }
    f5();
}
f4();

console.log("THIS IN GLOBAL");
console.log(this);
console.log(this.name);

const person4 = {
    name: 'John',
    details: function(){
        console.log(this);
    }
    // details: () => {    // takes value from the outer scope
    //     console.log(this);
    // }
}
person4.details();


const developer = {
    name:'sam',
    skills:['a','b','c','d'],
    details:function(){
        this.skills.forEach((ele) =>{
            console.log(`${this.name} knows ${ele}`);
        })
    }
    //value will come as undefined for this.name
    // details:function(){
    //     this.skills.forEach(function(ele){    //bug
    //         console.log(`${this.name} knows ${ele}`);//bcz of function expression this.name is not fetched, as function expression will return global object. if we use arrow fun it refers to the outer scope of the object. this.skills refers to current object in the method. inside that we are declaring one more function expression.
    //     })
    // }

}
developer.details();

let a = 10;
let b = 10;
console.log(a===b);