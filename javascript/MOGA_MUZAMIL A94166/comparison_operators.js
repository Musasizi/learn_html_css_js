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

const a = 10, b = 5, c = 'greetings';
//equal operator 
console.log(a==10); //is true
console.log(b==5); //is also true
console.log(c == 'greetings') //is false

//2. Strict Equal to operator ===
//it evaluates to true if the operands are equal and of the same type. For example 5 and '5' are the same numbers but the data type is different, so 5 and '5' are not === operands
const r =2;
// strict equal operator 
console.log(r===2); //true 
console.log(r==='2'); //false

/*
The DIFFERENCE between == and === is that == evaluates to true if the operands are equal WHILE 
=== evaluates to true only if the operands are equal and of the same type
*/

//3. Not Equal !=
//It evaluates to true if the operands are not equal 
const m = 10, n ='Hey';
//not equal operator
console.log(m!=30); //true 
console.log(n!= 'Hey'); //true

//4. Greater than operator  >
// It evaluates to trie if the left operand is greater than the right operand 
const p = 7;
//greater than or equal operator 
console.log(p >= 7); //true 

//5. Less than  operator <
//It evaluates to true if the left operand is less than the right operand 
const x = 4, z = 9;
// less than operator 
console.log(x < 3); //false
console.log(z < 10); //true 

//6. Greater than or equal to operator  >=
//It evaluates to true if the left operand is greater than or equal to the right operand
 
const i=4, j = 5;
//greater than or equal to operator 
console.log(i >= 4); //true
console.log(j >=10); //false 

//7. Less than or equal to operator 
//It evaluates to true  if the left operand is less than or equal to the right operand 

const g =4;
//less than or equal to operator 
console.log(g <= 5); //true
console.log(g <= 4); //true
console.log(g <= 3); //false

//8. strict not equal to operator !==
// It evaluates to true if the operands are strictly not equal. It is the opposite of strictly equal(===).

const k = 3, l ='Hey';
//strict not equal operator 
console.log(k !== 3); //false
console.log(k !=='3'); //true 
console.log(l !== 'hey'); //true because l = 'Hey' with a capital H.
