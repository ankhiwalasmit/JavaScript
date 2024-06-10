// function definition
function sayMyName(){
    console.log("S");
    console.log("M");
    console.log("I");
    console.log("T");
}

// sayMyName // function reference
// sayMyName() // function execution

// in function definition, parameters are passed
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// in function call, arguments are passed
// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

// we can store function result in a variable
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); // function does not return anything, so the result is undefined

// default parameter
function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("smit"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage()) // if we don't pass anything, it will return undefined
