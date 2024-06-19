// object literal
const user = {
    username: "smit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${username}`); // error
        // console.log(`username: ${this.username}`); 
        console.log(this); // return the current context
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // returns empty parenthesis but it returns the window object when executed in browser

// new keyword is the constructor function. it allows to create multiple instances from a single object literal
// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User("smit", 12, true)
// const userTwo = User("ChairAurCode", 11, false) // userTwo overwrites all the values of userOne
// console.log(userOne);

// constructor function always creates a new instance(copy)
// whenever we use new keyword, a new empty object is created which is known as instance
const userOne = new User("smit", 12, true)
const userTwo = new User("ChairAurCode", 11, false)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);