//Bitwise Operators in JavaScript

//Bitwise AND (&):
var x = 10; // binary representation: 1010
var y = 5; // binary representation: 0101
var result = x & y; // binary representation: 0000 = 0
// The bitwise AND operator compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.
console.log(result); // output: 0

//Bitwise OR (|):
var x = 10; // binary representation: 1010
var y = 5; // binary representation: 0101
var result = x | y; // binary representation: 1111 = 15
// The bitwise OR operator compares each bit of the first operand to the corresponding bit of the second operand. If either bit is 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.
console.log(result); // output: 15

//Bitwise XOR (^):
var x = 10; // binary representation: 1010
var y = 5; // binary representation: 0101
var result = x ^ y; // binary representation: 1111 = 15
// The bitwise XOR operator compares each bit of the first operand to the corresponding bit of the second operand. If the bits are different, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.
console.log(result); // output: 15

//Bitwise NOT (~):
var x = 10; // binary representation: 1010
var result = ~x; // binary representation: 0101 = 5
// The bitwise NOT operator reverses the bits of the operand. It changes 1 to 0 and 0 to 1.
console.log(result); // output: -11

//Left Shift (<<):
var x = 10; // binary representation: 1010
var result = x << 2; // binary representation: 101000 = 40
// The left shift operator shifts the bits of the first operand to the left by the number of positions specified by the second operand.
console.log(result); // output: 40

//Right Shift (>>):
var x = 10; // binary representation: 1010
var result = x >> 2; // binary representation: 10 = 2
// The right shift operator shifts the bits of the first operand to the right by the number of positions specified by the second operand.
console.log(result); // output: 2

//Unsigned Right Shift (>>>):
var x = -10; // binary representation: 11111111111111111111111111110110
var result = x >>> 2; // binary representation: 11111111111111111111111111111010 = 1073741822
// The unsigned right shift operator is like the right shift operator, but it always fills the leftmost bits with 0.
console.log(result); // output: 1073741822