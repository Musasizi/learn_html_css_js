// The Simple Bitwise operators
// Examples

var x = 10; // binary representation: 00000000000000000000000000001010
var y = 5;  // binary representation: 00000000000000000000000000000101
var z = x & y; // binary representation: 00000000000000000000000000000010, which is equal to 2 in decimal

var x = 10; // binary representation: 00000000000000000000000000001010
var y = 5;  // binary representation: 00000000000000000000000000000101
var z = x | y; // binary representation: 00000000000000000000000000001111, which is equal to 15 in decimal

var x = 10; // binary representation: 00000000000000000000000000001010
var y = 5;  // binary representation: 00000000000000000000000000000101
var z = x ^ y; // binary representation: 00000000000000000000000000001101, which is equal to 13 in decimal

var x = 10; // binary representation: 00000000000000000000000000001010
var y = ~x; // binary representation: 11111111111111111111111111110101, which is equal to -11 in decimal

var x = 10; // binary representation: 00000000000000000000000000001010
var y = x << 1; // binary representation: 00000000000000000000000000010100, which is equal to 20 in decimal

var x = 10; // binary representation: 00000000000000000000000000001010
var y = x >> 1; // binary representation: 00000000000000000000000000000101, which is equal to 5 in decimal
