const name = "smit"
const repoCount = 50

// console.log(name + repoCount + " Value");

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another method for creating strings using new keyword
const gameName = new String('smit-ank-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // does change the original string
// console.log(gameName.charAt(2)); // returns the character at the given index
// console.log(gameName.indexOf('i'));  // returns the first occurence of that character


// we can provide negative index in slice method but not in substring method
const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "        smit       "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // removes the leading and trailing spaces

const url = "https://smit.com/smit%20ankhiwala"
console.log(url.replace('%20', '-'))

console.log(url.includes('smit'))
console.log(url.includes('batman'))

console.log(gameName.split('-'));