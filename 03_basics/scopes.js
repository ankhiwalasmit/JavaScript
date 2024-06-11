// anything written inside {} is known as block scope
// anything written outside {} is known as global scope

// values written in global scope is available in block scope
// values written in block scope is not available in global scope

// let and const are block scope whereas var is a global scope

// let a = 10
// const b = 20
// var c = 30

// var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // c = 30
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// inner functions can access variables of outer function but outer function can't access variables of inner functions 
function one(){
    const username = "smit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error

    two()
}

// one()

if (true) {
    const username = "smit"
    if (username === "smit") {
        const website = " youtube"           
        // console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); // error

// ++++++++++ interesting ++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

// addone(5)

addTwo(5) // error
const addTwo = function(num) {
    return num + 2
}

// addTwo(5)