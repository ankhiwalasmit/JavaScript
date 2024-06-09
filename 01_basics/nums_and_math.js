const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); // disaplys the numbers after the decimal point

// const otherNumber = 23.8966
// const otherNumber = 1123.8966
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString('en-US'));

// +++++ Maths +++++

// console.log(Math);
// console.log(Math.abs(-4)); // -ve values converted into +ve values

// console.log(Math.round(4.3));
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.min(4, 3, 6, 8)); // returns the min value from an array
// console.log(Math.max(4, 3, 6, 8)); // returns the max value from an array

// console.log(Math.random()); // it always returns the value between 0 and 1
// console.log(Math.random() * 10);
// console.log(Math.random() * 10 + 1);
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor((Math.random() * 10)) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);