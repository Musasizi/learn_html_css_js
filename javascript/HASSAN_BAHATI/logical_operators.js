/**
 * Logical Operators
 * Logical operators are typically used with Boolean (logical) values
 *  they return a Boolean value
 */

/**
 * Short-Circuit Evaluation
 * false && (anything) is short-circuit evaluated to false.
 * true || (anything) is short-circuit evaluated to true.
 */

/**
 * Expressions that are conevrted to false
- false;
- null;
- NaN;
- 0;
- empty string ("" or '' or ``);
- undefined.
 */

// Logical AND (&&)
// - for example; expr1 && expr2
// - Returns expr1 if it can be converted to false; otherwise, returns expr2.
const a = 3;
const b = -2;

console.log(a > 0 && b > 0); // output: false

//Logical AND assignment (&&=) - The logical AND assignment (x &&= y) operator only assigns if x is truthy.
let c = 1;
let d = 0;
c &&= 2;
console.log(c); // output: 2

d &&= 2;
console.log(d); // output: 0

// Logical NOT (!)
/**
 * The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa.
 * It is typically used with boolean (logical) values. When used with non-Boolean values,
 * it returns false if its single operand can be converted to true; otherwise, returns true.
 */

const e = 3;
const f = -2;

console.log(!(e > 0 || f > 0)); // output: false

// Logical OR (||)
/**
 * The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true.
 *  It is typically used with boolean (logical) values. When it is, it returns a Boolean value.
 * However, the || operator actually returns the value of one of the specified operands,
 * so if this operator is used with non-Boolean values, it will return a non-Boolean value.
 */

console.log(e > 0 || f > 0); // output: true
