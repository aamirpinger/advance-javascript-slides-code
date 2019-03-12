// ARROW FUNCTIONS


/************************************************** */
// Try any part one at a time

// Normal function declaration
function myFunction(text) {
    let name = "Welcome " + text
    return name
}

let msg = myFunction("Aamir")
console.log(msg)  // Result: Welcome Aamir



/************************************************** */

//Function expression
// const myFunction = function (text) {
//     let name = "Welcome " + text
//     return name
// }

// let msg = myFunction("Aamir")
// console.log(msg)  // Result: Welcome Aamir


/************************************************** */

// Arrow function
// const myFunction = text => {
//     let name = "Welcome " + text
//     return name
// }
// let msg = myFunction("Aamir")
// console.log(msg)  // Result: Welcome Aamir


/************************************************** */

// Arrow function
// const myFunction = text => "Welcome " + text

// let msg = myFunction("Aamir")
// console.log(msg)  // Result: Welcome Aamir


/************************************************** */

// Arrow function
// const myFunction = (fname,lname) => `Welcome ${fname} ${lname}`

// let msg = myFunction("Aamir","Pinger")
// console.log(msg)  // Result: Welcome Aamir Pinger