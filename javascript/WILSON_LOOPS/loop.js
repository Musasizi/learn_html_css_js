
//Do while loop
/*this loop executes the code inside the do statement first regardless of whether the condition is true or false.
  After that, the condition is executed and if it is true, the code block is executed again. this continues until
  the condition becomes false and the loop terminates.*/

let d = 1;
do {
  console.log(d**2);
  d++;
} while (d <= 5);


//While loop
/*In a while loop, a code block is executed if a condition is true and for as long as that condition remains true,
  else the loop terminates.*/
let i = 1;

while (i < 11) {
  console.log(i + " x 3 = "+ (i * 3));
  i++;
}

//For loop
const num =[22, 34, 46, 58];
for (let p = 0; p < num.length; p++){
  console.log(num[p] * 0.5);
}


//for in loop
/*This loop is used to iterate over the properties of an object. For each property, the code in the code block is executed.*/
const capitals = {k: "Kampala", j: "Juba", n: "Nairobi", k: "kigali"};

for (let key in capitals) {
  console.log(key + ': ' + capitals[key]);
}


//for of loop
/* This loop is used to iterate over the elements of an iterable object such as an array, a set or a map.
   For each element in the iterable object, the code in the code block is executed.*/
const names = ["Richard", "Winnie", "Joseph"];

for (let elem of names) {
  console.log(elem);
}


//map()
/*map() is a built-in higher-order function that is used to create a new array by applying a given function 
  to each element of an existing array.*/

// create a function to use
const lst = Arr => Arr * 2;

// we have an array
const lst1 = [2, 3, 4, 5, 35];

// call the function we made.
const lst_double = lst1.map(lst);

console.log(lst_double); // Output: [4, 6, 8, 10, 70]


//filter()
/*the filter() method is used to create a new array that contains 
  only the elements that pass a certain condition.*/

var students = [
  {name: "Sarah", course: "BSCS"},
  {name: "Sandra", course: "BSIT"},
  {name: "Joshua", course: "BSCS"},
  {name: "Sam", course: "BSIT"}
];
var cs_students =  students.filter(function(student) {
  return student.course == "BSCS";
});
console.log(cs_students); //Output: [{name: 'Sarah', course: 'BSCS'}, {name: 'Joshua', course: 'BSCS'}]


//reduce()
/*reduce() method in JavaScript is used to reduce an array of values to a single value. It takes a 
  callback function as its first argument and an initial value as the second argument.*/
const numbers = [1, 3, 4, 5];
const sum = numbers.reduce((accumulator, initialValue) => {
  return accumulator + initialValue;
}, 0);

console.log(sum); // Output: 13


//push()
/*push() method is a built-in function in JavaScript that is used to add one or more elements to the
 end of an array. It changes the original array, and it can accept one or more arguments to add to the array.*/
const fruits = ["apple", "banana", "orange"];
fruits.push("mango");

console.log(fruits); // Output: ["apple", "banana", "orange", "mango"]


//pop()
/*pop() is a built-in JavaScript array method that removes the last element from an array and returns it.
  Calling pop() on an empty array will return undefined.*/
const myArray = ["apple", "banana", "orange"];

const removedElement = myArray.pop();

console.log(myArray); // Output: ["apple", "banana"]
console.log(removedElement); // Output: "orange"


//every()
/*The every() method in JavaScript is used to check if all the elements in an array pass a certain condition.
 It returns a boolean value true if all elements in the array pass the condition, and false otherwise.*/
const arr1 = [1, 2, 3, 4, 5];

const isPositive = (number) => number > 0;

const result = arr1.every(isPositive);
console.log(result); // Output: true


//fill()
/*fill() method in JavaScript is used to fill the elements of an array with a static value. It takes one
 required argument, which is the value that will be used to fill the array, and two optional arguments: start and end.*/
// Create an array with 5 elements
let arr3 = [1, 2, 3, 4, 5];

// Fill the array with the value 0 from index 2 to index 4 (not inclusive)
arr3.fill(0, 2, 4);

// Output the modified array
console.log(arr3); // Output: [1, 2, 0, 0, 5]
