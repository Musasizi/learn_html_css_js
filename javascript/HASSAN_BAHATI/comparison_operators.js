/* COMPARISON OPERATORS

A comparison operator compares its operands and returns a logical value based on whether the comparison is true. 

The operands can be numerical, string, logical, or object values.

*/

const var1 = 3;
const var2 = 4;

// Equal (==) - Returns true if the operands are equal.
console.log(3 == var1); // output returned: true
console.log("3" == var1); // output returned: true
console.log(var1 == var2); // output returned: false

// Not equal (!=) - Returns true if the operands are not equal.
console.log(var1 != 4); // output returned: true
console.log(4 != var2); // output returned: false
console.log(var1 != var2); // output returned: true

// Strict equal (===) - Returns true if the operands are equal and of the same type
console.log(3 === var1); // output returned: true
console.log("4" === var2); // output returned: false

// Strict not equal (!==) - Returns true if the operands are of the same type but not equal, or are of different type.
console.log(var1 !== "3"); // output returned: true
console.log(3 !== "3"); // output returned: true

// Greater than (>) - Returns true if the left operand is greater than the right operand.
console.log(var2 > var1); // output returned: true
console.log("12" > 2); // output returned: true

// Greater than or equal (>=) - Returns true if the left operand is greater than or equal to the right operand.
console.log(var2 >= var1); // output returned: true
console.log(var1 >= 3); // output returned: true

// Less than (<) - Returns true if the left operand is less than the right operand.
console.log(var1 < var2); // output returned: true
console.log("2" < 12); // output returned: true

//Less than or equal (<=) - Returns true if the left operand is less than or equal to the right operand.
console.log(var1 <= var2); // output returned: true
console.log(var2 <= 5); // output returned: true
