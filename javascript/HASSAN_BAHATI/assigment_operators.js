/* ASSIGNMENT (=) OPERATORS

The assignment (=) operator is used to assign a value to a variable. 
The assignment operation evaluates to the assigned value. 
Chaining the assignment operator is possible in order to assign a single value to multiple variables

*/

// es5
var programmer = "Hassan Bahati";

//es6
let x = 2;
const y = 3;

console.log(programmer); // output returned: Hassan Bahati

console.log(x); // output returned: 2

console.log((x = y + 1)); // 3 + 1
// output returned: 4

console.log((x = x * y)); // 4 * 3
// output returned: 12

/**
 * Simple assignment and chaining
 */

let m = 5;
let b = 10;
let e = 25;

m = b; // x is 10
m = b = e; // x, y and z are all 25
