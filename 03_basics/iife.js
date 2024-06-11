// Immediately Invoked Function Expressions(IIFE)

// iife is used to remove pollutions from global scope
// ; is used to stop the execution of IIFE

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

( function aurcode()  {
    console.log(`DB DISCONNECTED TWO`);
} )();

// simple/unnamed IIFE
( (name) => {
    console.log(`DB DISCONNECTED THREE ${name}`);
} )('smit');