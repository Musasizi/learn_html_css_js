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

let a = 20;
let b = 45;

//1. Assignment Operator =
//The assignment operator is used for the purpose of assigning a value to a variable.
console.log(a=20);
console.log(b=45);


//2. Addition Assignment Operator +=
//The addition assignment operator is used to add the value of the right operand to the left operand and allocates the resulting value to the variable.
console.log(a+=b);

//3. Subtraction Assignment Operation -=
//The subtraction operator subtracts the value of the right operand from the left operand and allocates the resulting value to the variable.
console.log(a-=b);

//4. Multiplication Assignment Operation *=
//The multiplication assignment multiplies the value of the right operand with the left operand and assigns the resulting value to the variable.
console.log(a*=b);

//5. Division Assignment Operation /=
//The division assignment divides the variable value by the right operand and assigns the resulting value to the variable.
console.log(a/=b);

//6. Remainder Assignment Operation %=
//The remainder operator returns the remainder that is left as a result of dividing one operand by another.
console.log(a%=b);

//7. Exponential Assignment Operation **=
//Exponentiation operator is used to raise the value of the variable to the right operand.
console.log(a**=b);

//8. Unsigned Right Shift Assignment >>>=   
//The right shift operator pushes a particular number of bits to the right and the resulting value is assigned to the variable. Positive numbers are shifted to the right with same effect as the right shift operator, meanwhile, for negative numbers empty bits are replaced by zeros.
console.log(a>>>=b);

//9. Bitwise AND Assignment Operation &=
// This operator uses the binary codes of the both left and right operand and performs AND function then assigns the result to the variable.
console.log(a&=b);

//10. Bitwise OR Assignment Operation |=
//This operator uses the binary codes of the both left and right operand to perform OR and assigns the result to the variable.
console.log(a|=b);

//11. Bitwise XOR Assignment Operation ^=
// This operator uses the binary codes of the both left and right operand to perform XOR and assigns the result to the variable.
console.log(a^=b);

//12. Right Shift Assignment Operation >>=
//The right shift operator pushes a particular number of bits to the right and the resulting value is assigned to the variable.
console.log(a>>=b);

//13. Left Shift Assignment Operation <<=
//The left shift operator pushes a particular number of bits to the left and the resulting value is assigned to the variable.
console.log(a<<=b);
