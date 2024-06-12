// for-of loop always returns the value

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps
// maps contains unique values and they remain in the same order in which they are entered
// maps are not iterable

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key);
    // console.log(value);
    // console.log(key, ':-' , value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for-of loop does not work objects
// for (const [key, value] of myObject) {
//     console.log(key, ':-' , value); // error
// }

