// JS is a dynamically typed language

// primitive datatype
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// all the primitive datatypes are call by value

const score = 100  // number
const scoreValue = 100.3 // number
const isLoggedIn = false // boolean
const outsideTemp = null // object

let userEmail = undefined // undefined
let userName; // undefined

const id = Symbol('123') // symbol
const anotherID = Symbol('123') // symbol
// console.log(id == anotherID);

const bigNumber = 5492156878265368953378n // bigint

// reference type or non-primitive datatype
// Arrays, Objects, Functions
// all the reference datatypes are call by reference
// return type of all non-primitive datatypes are objects

const heroes = ["shaktiman", "naagraj", "doga"]; // objects
let myObj = {
    name: "smit",
    age: 22,
} // objects
const myFunction = function(){
    console.log("Hello World");
} // functions

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof heroes);
// console.log(typeof myObj);
// console.log(typeof myFunction);


// types of memory: stack(primitive), heap(non-primitive)

// call by value
let myYoutubename= "smitankhiwaladotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// call by reference
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "smit@google.com"

console.log(userOne.email);
console.log(userTwo.email);