// arrays can contain different types of elements
// js arrar copy operations create shallow copies

// different ways to create arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = [0, 1, 2, 3, 4, 5, true, "smit"]
const heroes = ["shaktiman", "naagraj"]
const myArr3 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // inserts an element at the beginning of the array
// myArr.shift() // removes  an element from the beginning of the array

// console.log(myArr.includes(9)); // returns true if the element is present in the array, otherwise returns false

// console.log(myArr.indexOf(9)); //returns the index of the given element if it is present, otherwise returns -1
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // does not modify the array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // it modifies the array by removing the elements from it
console.log("C ", myArr);
console.log(myn2);

