/*
Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a Javascript number.

The following are the Bitwise operators:
1. Bitwise AND operator &
2. Bitwise OR operator |
3. Bitwise NOT operator ~
4. Bitwise XOR operator ^
5. Zero fill left shift  <<
6. Signed right shift >>
7. Zero fill right shift >>>
*/

//1. Bitwise AND operator &
// It returns 1 if the corresponding bits of both operands are 1 else it returns o.
//Example of bitwise AND operation of two intergers 12 and 25.

let a = 12;
let b = 25;

result = a & b;
console.log(result);   
// gives a result of 8 sine the binary value of 12 is 00000000000000000000000000001100, the binary value of 25 is 00000000000000000000000000011001 so the a & b is 00000000000000000000000000001000 which converts into the decimal value 8.

//2. Bitwise OR operator |
// It returns 1 if either of the corresponding bits of one operand is 1 else returns 0.
// it ONLY returns false (0) when BOTH operands have bits of zeros.

//Example of bitwise OR operation of two intergers 12 and 25.
/*
In binary,

12 = 01100
25 = 11001

// Bitwise OR Operation of 12 and 25

    00001100
|   00011001
    --------
    00011101  = 29 (In decimal)
*/

//Bitwise OR operator example
let c = 12;
let d = 25;

result = c | d;
console.log(results);  //Returns 29
//the binary result will be 00000000000000000000000000011101 which converts into the decimal value 29.


//3. Bitwise NOT operator ~
// It inverts the bit(0 becomes 1, and 1 becomes 0).
//Bitwise NOT operator  example 

let f = 12; 
result = ~f;
console.log(result); // returns -13

//When bitwise NOT operation is performed, the binary result will be 11111111111111111111111111110011 which converts into the decimal value -13.
/*
NOTE: When bitwise NOT operation is performed, the binary result will be 11111111111111111111111111110011 which converts into the decimal value -13.
*/

//4. Bitwise XOR operator ^
//Bitwise XOR ^ returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same.
//Example of bitwise XOR operation of two intergers 12 and 25.
/*
In binary,

12 = 01100
25 = 11001

// Bitwise XOR Operation of 12 and 25

    00001100
^   00011001
    --------
    00010101  = 21 (In decimal)
*/

//  Bitwise XOR Operation Example 
let g = 12; 
let h = 25;

result = g ^ h;
console.log(result); // returns 21

//the binary result will be 00000000000000000000000000010101 which converts into the decimal value 21.

//5. Zero fill left shift  <<
//In the left shift operator <<, the left operand specifies the number and the right operand specifies the number to be shifted left. Zero bits are added to the right and excess bits from the left are discarded.
//Example:

let i = 8;
let j = 1;
result = i << j;
console.log(result); //Results to 1 which is euivalent to 00000000000000000000000000010000 in binary 

//6. Signed right shift >>
//In the right shift operator >>, the first operand specifies the number and the second operand specifies the number to be shifted right. Excess bits from the right are discarded. The copies of the leftmost bit are shifted in from the left.

//Example 
let k = 8;
let l = 1;
let m = -3;

result = k >> l;
result1= m >> l;

console.log(result);  // It results to 4 which is 00000000000000000000000000000100 in binary 
console.log(result1); // results to -2 which is in binary result evivalent to 00000000000000000000000000000100

//7. Zero fill right shift >>>
// Zero-fill right shift >>> shifts the operand to the right by filling the zero bits to the left. Excess bits from the right are discarded.

//Example 
let n = 8;
let p = 1;
let q = -3;

result = n >>> p; 
result1 = q >>> p; 

console.log(result);  // results to 4 which is 00000000000000000000000000000100 in binary  
console.log(result); // results to 1073741823  which is 00111111111111111111111111111111 in binary

