// Bitwise operators in Javascript are used to perform operations on the individual bits within a number. 
// These operators are used to manipulate the binary representation of a number.

// Examples of the bitwise operators in Javascript are:

// Bitwise AND ( & ): The bitwise AND operator compares each bit of the first operand to the corresponding bit of the second operand.
//  If both bits are 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.

// Bitwise OR ( | ): The bitwise OR operator compares each bit of the first operand to the corresponding bit of the second operand. 
//     If either bit is 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.

// Bitwise XOR ( ^ ): The bitwise XOR operator compares each bit of the first operand to the corresponding bit of the second operand. 
//     If one but not both bits are 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.

// Bitwise NOT ( ~ ): The bitwise NOT operator inverts all the bits of the operand.

// Bitwise Left Shift ( << ): The bitwise left shift operator shifts the bits of the first operand to the left by the number of positions specified by the second operand.

// Bitwise Right Shift ( >> ): The bitwise right shift operator shifts the bits of the first operand to the right by the number of positions specified by the second operand.

// For example:

let x = 10;
let y = 5;
console.log(x & y); // Output: 0
console.log(x | y); // Output: 15
console.log(x ^ y); // Output: 15
console.log(~x);    // Output: -11
console.log(x << 2);// Output: 40
console.log(x >> 2);// Output: 2

//In the example above, the bitwise AND operator returns 0 because no bits are set in both operands.
//The bitwise OR operator returns 15 because all bits are set in either operand. 
//The bitwise XOR operator returns 15 because only one bit is set in either operand. 
//The bitwise NOT operator returns -11 because it inverts all the bits of the operand. 
//The bitwise left shift operator returns 40 because it shifts the bits of the first operand to the left by 2 positions.
//The bitwise right shift operator returns 2 because it shifts the bits of the first operand to the right by 2 positions.