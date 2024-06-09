// Dates

let myDate = new Date()
// console.log(myDate) // Output: 2023-02-20T14:30:
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // date is an object

// different ways to create date
// let myCreatedDate = new Date(2023, 0, 23) // in js, months start from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // convert ms to s

let newDate = new Date()
console.log(newDate.getMonth()); // months start from 0
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // days start from sunday(0)

newDate.toLocaleString('default', {
    weekday: "long",
})