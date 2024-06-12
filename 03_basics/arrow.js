const user = {
    username: "smit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage(); // smit , welcome to website
// user.username = "sam"
// user.welcomeMessage(); // sam , welcome to website

// in browsers, window object is the global object
// in node environment, eempty object is the global object
// console.log(this); // refers to empty object

// this keyword works only in object, it does not work in functions
// function chai(){
//     let username = "smit"
//     console.log(this);
//     console.log(this.username); // undefined
// }

// const chai = function chai(){
//     let username = "smit"
//     console.log(this);
//     console.log(this.username); // undefined
// }

const chai = () => {
    let username = "smit"
    console.log(this); // refers to an empty object
    console.log(this.username); // undefined
}

// chai()

// different ways to define arrow function
// explicit return => uses return kyeword
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
    
// implicit return => does not uses return kyeword
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "smit"}) // returns an object

console.log(addTwo(3, 4))