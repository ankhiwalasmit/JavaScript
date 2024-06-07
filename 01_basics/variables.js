// cannot change the value of the variable
const accountId = 144553
// can change the value of the variable andd has limited scope
let accountEmail = "smit@google.com"
// can change the value of the variable andd has global scope
var accountPassword = "12345"
accountCity = "Vadodara"
// undefined
let accountState;

// accountId = 2

accountEmail = "hc@hc.com"

accountPassword = "2121212121"

accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])