// Printing our first program
// console.log("Hello, World!");

// Declaring Variables
let name = "Jane Doe"; // let is block scoped
var country = "Uganda"; // var is function scoped
var country = "United States"; // it is possible to redeclare this variable
// console.log(country);

// Declaring Constants
const PI = 3.14;


//Rules of naming variables

let snake_case;
let camelCase;
let CapsCase;
let MACRO_CASE;

//DON'T - name your variables using keywords
// let let;
// let class;
// let const;
// let function;

// DATA TYPES
/*
 Strings
 Number
 **BigInt
 Boolean
 Undefined
 null
  **Symbol
 Object
*/

let program = "BSC. Computer Science";
let stream = 'STREAM A';
let hobby = `Cycling`;

let gpa = 5.0;
let age = 16;

let isResident = true;
let hasMeals = false;

let currentJob;
// DON'T DO THIS
//  let currentJob = undefined;


let nextJob = null;

// console.log(currentJob);
// console.log(nextJob);


let studentObj = {
    name: "Daphine",
    program: "Computer Science",
    registrationNumber: "S21B24/000",
    accessNumber: "A90000",
    age: 16,
    sex: "FEMALE",
    isResident: false,
    hasMealCard: false,
}

console.log("Registration Number:", studentObj.registrationNumber);
console.log("Access Number:", studentObj.accessNumber);
console.log("Name:", studentObj.name);


console.log(`Program Name: ${studentObj.program}`);