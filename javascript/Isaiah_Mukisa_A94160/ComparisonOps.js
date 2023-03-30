/* COMPARISON OPERATORS
        ==  Equal To
        !=  NOT Equal To
        === Strict Equal To
        !== Strict NOT Equal To
        >= Greater than or equal to
        <= less than or equal to
        > Greater than
        < less than
*/

let test = 50;
let test2 = 40;
let test3 = "40";

// Using ==
console.log(test2 == test3);
// Logs true because it is not being strict on the input and considers the string characters to be equal to the integer

// using ===
console.log(test2 === test3);
// Logs false because now we are the program is also considering the data types as well.

// using !==
console.log(test2 !== test3);
// logs true

// using !=
console.log(test2 != test3);
// logs false because it is not strict on the data types

// using >
console.log(test > test2);
// Logs true

// using >=
console.log(test >= test2);
// Logs true
