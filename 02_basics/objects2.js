// different ways to create objects

const tinderUser = new Object() // singleton
// const tinderUser = {} // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "smit",
            lastname: "ankhiwala",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// different ways to combine objects
// const obj3 = {obj1, obj2} // nested objects are created
// const obj3 = Object.assign(obj1, obj2) // adds all the elements of the source objects are added into the target object and modify the target object.
// const obj3 = Object.assign({}, obj1, obj2, obj4) // add the elements of the source objects are added into the empty or target object({}) and returns a new object.
const obj3 = {...obj1, ...obj2}
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // return array of keys
console.log(Object.values(tinderUser)); // return array of values
console.log(Object.entries(tinderUser)); // every key-value is converted into array and returns array of arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // returns true if that property is present in the object
console.log(tinderUser.hasOwnProperty('isLogged')); // returns false if that property is not present in the object

