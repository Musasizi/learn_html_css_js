/* BITWISE OPERATORS

A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.

Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

Bitwise AND	------- a & b                           -- Returns a one in each bit position for which the corresponding bits of both operands are ones.
Bitwise OR	------- a | b                           -- Returns a zero in each bit position for which the corresponding bits of both operands are zeros.
Bitwise XOR	------- a ^ b                           -- Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.
Bitwise NOT ------- ~ a                             -- Inverts the bits of its operand.
Left shift	------- a << b                          -- Shifts a in binary representation b bits to the left, shifting in zeros from the right.
Sign-propagating right shift	------- a >> b      -- Shifts a in binary representation b bits to the right, discarding bits shifted off.
Zero-fill right shift	------- a >>> b             -- Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.
*/

// Bitwise AND
console.log(15 & 9); // output returned: 9

// Bitwise OR
console.log(15 | 9); // output returned: 15

// Bitwise XOR
console.log(15 ^ 9); // output returned: 6

// Bitwise NOT
console.log(~15); // output returned: -16

// Bitwise NOT
console.log(~9); // output returned: -10

// Left shift
console.log(9 << 2); // output returned: 36

// Sign-propagating right shift
console.log(9 >> 2); // output returned: 2

// Zero-fill right shift
console.log(19 >>> 2); // output returned: 4
