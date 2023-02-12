/* 
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
const a = 10, b = 5, c = 'greetings';
//equal operator 
console.log(a==10); //is true
console.log(b==5); //is also true
console.log(c == 'greetings') //is false

//2. Strict Equal to operator ===
const r =2;
// strict equal operator 
console.log(r===2); //true 
console.log(r==='2'); //false

/*
The DIFFERENCE between == and === is that == evaluates to true if the operands are equal WHILE 
*/

//3. Not Equal !=
const m = 10, n ='Hey';
//not equal operator
console.log(m!=30); //true 
console.log(n!= 'Hey'); //true

//4. Greater than operator  >
const p = 7;
//greater than or equal operator 
console.log(p >= 7); //true 

//5. Less than  operator <
const x = 4, z = 9;
// less than operator 
console.log(x < 3); //false
console.log(z < 10); //true 

//6. Greater than or equal to operator  >= 
const i=4, j = 5;
//greater than or equal to operator 
console.log(i >= 4); //true
console.log(j >=10); //false 

//7. Less than or equal to operator 
const g =4;
//less than or equal to operator 
console.log(g <= 5); //true
console.log(g <= 4); //true
console.log(g <= 3); //false

//8. strict not equal to operator !==
const k = 3, l ='Hey';
//strict not equal operator 
console.log(k !== 3); //false
console.log(k !=='3'); //true 
console.log(l !== 'hey'); //true because l = 'Hey' with a capital H.
