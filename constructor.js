//before using constructor:
const p1 = {
    name:'john',
    score: [10,20,30],
    calcAvg:function(){
        const res = this.score.reduce((acc,cv) => acc + cv);
        return res/this.score.length;
    }
}
const p2 = {
    name:'steve',
    score: [20,50,30],
    calcAvg:function(){
        const res = this.score.reduce((acc,cv) => acc + cv);
        return res/this.score.length;
    }
}
//example -2 
console.log("EXAMPLE 2");
function Player(pName,pCountry,pRuns){
    //explicitly properties are assigned to this
    this.name = pName;
    this.country = pCountry;
    this.runs = pRuns;
//method
    this.details = function(){
        return `${this.name} plays for ${this.country}`;
    }
    //implicitly returns value of this
}

const c1 = new Player('virat','India',[100,50,60]);
console.log(c1);
console.log(c1.details());

const c2 = new Player('Dhoni','India',[50,50,50]);
console.log(c2);
console.log(c2.details());


// instead of writing methods several times, can define one time using the prototype
console.log("===========USING PROTOTYPE:===========");
function Player2(pName,pCountry,pRuns){
    //explicitly properties are assigned to this
    this.name = pName;
    this.country = pCountry;
    this.runs = pRuns;
//method
    /*    this.details = function(){
        return `${this.name} plays for ${this.country}`;
    }*/
    //implicitly returns value of this
}
Player2.prototype.details = function(){
    return `${this.name} plays for ${this.country}`;
}
Player2.prototype.totalRuns = function(){
    return this.runs.reduce((acc,cv) => acc+cv);
}
const c3 = new Player2('virat','India',[100,50,60]);
console.log(c3);
console.log(c3.details());
console.log(c3.totalRuns());

const c4 = new Player2('Dhoni','India',[50,50,50]);
console.log(c4);
console.log(c4.details());
