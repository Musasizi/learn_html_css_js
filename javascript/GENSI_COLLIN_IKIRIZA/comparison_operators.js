//The Simple Comparison Operators
// Equality (==): This operator tests for equality between two values without considering the type of the operands.
// javascript

var x = 10;
var y = "10";
console.log(x == y);  // true

// Strict equality (===): This operator tests for equality between two values while considering the type of the operands.
let x = 10;
let y = "10";
console.log(x === y);  // false

// Inequality (!=): This operator tests for inequality between two values without considering the type of the operands.
let x = 10;
let y = 20;
console.log(x != y);  // true

// Strict inequality (!==): This operator tests for inequality between two values while considering the type of the operands.
let x = 10;
let y = "10";
console.log(x !== y);  // true

// Greater than (>) and Less than (<): These operators test whether the value of one operand is greater than or less than the value of the other operand, respectively.
let x = 10;
let y = 20;
console.log(x > y);  // false
console.log(x < y);  // true

// Greater than or equal to (>=) and Less than or equal to (<=): These operators test whether the value of one operand is greater than or equal to, or less than or equal to, the value of the other operand, respectively.
let x = 10;
let y = 20;
console.log(x >= y);  // false
console.log(x <= y);  // true

