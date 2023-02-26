/*
Assignment operators assign values to Javascript variables.
The following are assignment operators:
1. Assignment Operator =
2. Addition Assignment Operator +=
3. Subtraction Assignment Operation -=
4. Multiplication Assignment Operation *=
5. Division Assignment Operation /=
6. Remainder Assignment Operation %=
7. Exponential Assignment Operation **=
8. Unsigned Right Shift Assignment >>>=
9. Bitwise AND Assignment Operation &=
10.Bitwise OR Assignment Operation |=
11.Bitwise XOR Assignment Operation ^=
12.Right Shift Assignment Operation >>=
13.Left Shift Assignment Operation <<=
 */

let x = 20;
//1. Assignment Operator =
//The assignment operator asigns the value on the right to the variable on the left
console.log(x);


//2. Addition Assignment Operator +=
//The addition assignment operator adds the value on the right to the variable on the left and assigns the result ti the variable on the left.

console.log(x += 5);

//3. Subtraction Assignment Operation -=
//The subtraction operator subtracts  the value on the left and assigns the result to the variable on the left

console.log(x -= 10);

//4. Multiplication Assignment Operation *=
//The multiplication assignment multiplies the value on the left and assigns the result to the variable on the left.

console.log(x *= 2);

//5. Division Assignment Operation /=
//The division assignment divides the variable on the left by the value on the right and assigns the result to the variable on the left.

console.log(x /= 5);

//6. Remainder Assignment Operation %=
//The remainder operator takes the modulus of the variable on the left with the value on the right and assigns the result to the variable on the left.

console.log(x %= 3);

//7. Exponential Assignment Operation **=
//Exponentiation operator raises the variable on the left to the power of the value on the right and assigns the result to the variable on the left.
console.log(x **= 2);

//8. Unsigned Right Shift Assignment >>>=   
//The right shift operator pushes a particular number of bits to the right and the resulting value is assigned to the variable. Positive numbers are shifted to the right with same effect as the right shift operator, meanwhile, for negative numbers empty bits are replaced by zeros.
console.log(x >>>= 2);

//9. Bitwise AND Assignment Operation &=
// This operator performs a bitwise AND operation between the left operand and the right operand, and then assigns the result to the left operand.
console.log(x &= 5);

//10. Bitwise OR Assignment Operation |=
//This operator performs a bitwise OR operation between the left operand and the right operand, and then assigns the result to the left operand.
console.log(x |= 2);

//11. Bitwise XOR Assignment Operation ^=
// This operator performs a bitwise XOR operation between the left operand and the right operand, and then assigns the result to the left operand.
console.log(x ^= 1);

//12. Right Shift Assignment Operation >>=
//The right shift operator performs a right shift operation between the left operand and the right operand, and then assigns the result to the left operand.
console.log(x >>= 1);

//13. Left Shift Assignment Operation <<=
//The left shift operator performs a left shift operation between the left operand and the right operand, and then assigns the result to the left operand.
console.log(x <<= 1);