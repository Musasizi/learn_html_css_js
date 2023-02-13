/* 
Compariosn operators are used to test for true or false. Compariosn operators are used in logical statements to determine equality or difference between 
variables or values.
The following are the comparison operators
1. Equal to operator ==
2. Equal value and equal type === (strict equal to operator)
3. Not Equal !=
4. Greater than opeerator  >
5. Less than  operator <
6. Greater than or equal to  operator >=
7. Less than or equal to operator  <=
8. Not equal value or not equal type !== (strict not equal to)
*/

//1. Equal to operator == 
//is a comparison operator that evaluates to true if the operands are equal 

const a = 100, b = 5, c = 'welcome';
//equal operator 
console.log(a == 100); //true
console.log(b == 9); //false
console.log(c == 'welcome') //is true

//2. Strict Equal to operator ===
//it evaluates to true if the operands are equal and of the same type. For example 5 and '5' are the same numbers but the data type is different, so 5 and '5' are not === operands
const rs = 93; 
console.log(rs === 93); //true 
console.log(rs ==='93'); //false

/*
The DIFFERENCE between == and === is that == evaluates to true if the operands are equal WHILE 
=== evaluates to true only if the operands are equal and of the same type
*/

//3. Not Equal !=
//Returns true if the operands are not equal 
const mv = 23, np = 55;

console.log(mv!= 11); //true 
console.log(np != 55); //false

//4. Greater than operator  >
// It evaluates to true if the left operand is greater than the right operand 
const vs = 15;
console.log(vs > 11); //true 

//greater than or equal operator 
console.log(vs >= 8); //true 

//5. Less than  operator <
//It evaluates to true if the left operand is less than the right operand 
const x = 4, z = 9;
// less than operator 
console.log(x < 1); //false
console.log(x < z); //true 

//6. Greater than or equal to operator  >=
//It evaluates to true if the left operand is greater than or equal to the right operand

const i= 4, j = 5;
//greater than or equal to operator 
console.log(i >= 4); //true
console.log(j >= j); //false 

//7. Less than or equal to operator 
//It evaluates to true  if the left operand is less than or equal to the right operand 

const ms = 3; 
console.log(ms <= 7); //true
console.log(ms <= 4); //true
console.log(ms <= 1); //false

//8. strict not equal to operator !==
// It evaluates to true if the operands are strictly not equal. It is the opposite of strictly equal(===).
const s = 13, t ='boy';
console.log(s !== 3); //true
console.log(s !=='13'); //true 
console.log(t !== 'boy'); //true because 