const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Smit", email: "smit@google.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "smit", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => { // .then runs(executed) when the promise is resolved
//     console.log(user)
//     return user.username
// })
// .then((username) => { // return value of the first then method is used in second then method and so on. this is known as promise chaining 
//     console.log(username);
// })
// .catch(function(error){ // .catch runs(executed) when the promise is rejected
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected")) // .finally always runs(executed) whether the promise is resolved or rejected

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     // const response = await promiseFive
//     // console.log(response);
//     try{
//         const response = await promiseFive
//         console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()

// // async function getAllUsers(){
// //     try{
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
// //         const data = await response.json()
// //         console.log(data);
// //     } catch(error){
// //         console.log("E: ", error);
// //     }
// // }

// // getAllUsers()

// // fetch('https://jsonplaceholder.typicode.com/users')
// // .then((response) => {
// //     return response.json()
// // })
// // .then((data) => {
// //     console.log(data)
// // })
// // .catch((error) => console.log(error))

// fetch('https://api.github.com/users/ankhiwalasmit')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => console.log(error))