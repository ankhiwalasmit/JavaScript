const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) // pushes the elements into the same array and does not return a new array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes) // concats the elements into the same array and returns a new array
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // flattens the array to a single level
// console.log(real_another_array);

console.log(Array.isArray("smit"))
console.log(Array.from("smit")) // converts it into array
console.log(Array.from({name: "smit"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));