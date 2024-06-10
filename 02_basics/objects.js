// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Smit",
    "full name": "Smit Ankhiwala",
    mySym: "mykey1", // not a symbol
    [mySym]: "mykey1", // symbol
    age: 25,
    location: "Vsdodara",
    email: "smit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// different ways to access objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser.full name); // error
// console.log(JsUser."full name"); // error
// console.log(JsUser["full name"]);

// console.log(typeof JsUser.mySym); // string
// console.log(JsUser[mySym]); // symbol

JsUser.email = "smit@chatgpt.com"
// Object.freeze(JsUser) // does not allow the modification of the object
JsUser.email = "smit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this keyword is used to refer the same object
}

console.log(JsUser.greeting); // returns function reference, function is not executed
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());