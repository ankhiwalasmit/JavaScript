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
// console.log(loginUserMessage()) // if we don't pass anything, it will return undefined

// ... is used to pass multiple values in a function and all these values are added in an array
// function calculateCartPrice(...num1){
//     return num1
// }

// first argument goes to first parameter, second argument goes to second parameter, and the remaining values goes to ...num1
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "smit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
