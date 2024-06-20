// let myName = "smit     "
// let myChannel = "chai    " 

// console.log(myName.truelength());

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.smit = function(){
    console.log("smit is present in all objects");
}

Array.prototype.heySmit = function(){
    console.log('Smit says hello');
}

// heroPower.smit()
// myHeroes.smit()
// myHeroes.heySmit()
// heroPower.heySmit() // error

// inheritance

const User = {
    name: "chai",
    email: "chail@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // TASupport can access all the properties of Teaching Support
}

Teacher.__proto__ = User // Teacher can access all the properties of User

// modern syntax for prototype inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChairAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"smit".trueLength()
"iceTea".trueLength()