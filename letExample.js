// LET

// Excellent article on LET, CONST, Variable
// https://andy-carter.com/blog/variable-scope-in-modern-javascript

/************************************************** */
// Try any part one at a time

var x = 10;
console.log(x)       // Result: 10
{
    let x = 2;
    console.log(x)   // Result: 2
}
console.log(x)       // Result: 10


/************************************************** */

// let myname = "Aamir"

// console.log(myname)  //Result: Aamir

// function getName() {
//     let myname = "Pinger"
//     console.log(myname) //Result: Pinger
// }

// getName()

// console.log(myname)  //Result: Aamir



/************************************************** */




// let myname          // Declare variable
// myname = 'Aamir';   // Initialize variable
// console.log(myname) // result: Aamir



/************************************************** */

// let myname          // Declare variable
// console.log(myname) // result: Undefined
// myname = 'Aamir';   // Initialize variable



/************************************************** */


// myname = 'Aamir';   // Initialize variable
// console.log(myname) // result: ERROR: myname is not defined
// let myname          // Declare variable



/************************************************** */

// myname = 'Aamir';   // Initialize variable
// let myname          // Declare variable
// console.log(myname)// result: ERROR: myname is not defined

