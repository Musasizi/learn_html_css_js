//Assignment TWO on loops !!!!!!!!!!!!!!!

/*
    INSTRUCTIONS:
    NUMBER ONE:
Work in the folder you have created, 
Create a js file and do the following loops
    1. do - while loop
    2. while loop
    3. for in loop
    4. for of loop
Add comments using multi-line comments about the loops, what they do and how to use each of them and also the code should be well commented. 
Follow all the naming conventions learned.(Naming Variables): 
    1. snake_case- used to write strings.
    2. camelCase - used to write Variable and Function names (when naming objects, functions and instances).
    3. MACRO_CASE
    4.capCase.
Functions should be named using verbs. 
    NUMBER TWO:
Write about 
Built-in functions in JavaScript are useful. You can use it to construct more complex functions. 
So, knowing these functions is important to improve your knowledge of that programming language.
1. map()
2. filter()
3. reduce()
4. push()
5. pop()
6. every()
7. fill()*/

//ANSWER TO QUESTION ONE

// DO-WHILE LOOP
// The do-while loop is a type of loop that executes the block of code at least once before checking the condition.
// After the first iteration, the loop continues to execute as long as the condition remains true.
let i = 0;
do {
console.log(i);
i++;
} while (i < 5);

// WHILE LOOP
// The while loop is a type of loop that executes the block of code as long as the condition is true.
// It checks the condition before the execution of the block of code, so it may not execute the code even once.
let j = 0;
while (j < 5) {
console.log(j);
j++;
}

// FOR-IN LOOP
// The for-in loop is used to iterate over the properties of an object or the elements of an array.
const person = { name: 'John', age: 30, city: 'New York' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}


// FOR-OF LOOP
// The for-of loop is used to iterate over the values of an iterable object such as an array or a string.
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
console.log(fruit);
}

//ANSWER TO QUESTION TWO

// MAP()
// The map() method creates a new array by applying a callback function to each element of an existing array.
// It returns an array with the same length as the original array.
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2);

// FILTER()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// It returns an array with the same or smaller length than the original array.
const ages = [18, 22, 15, 35, 27];
const allowedToVote = ages.filter((age) => age >= 18);

// REDUCE()
// The reduce() method applies a function to each element of an array to reduce it to a single value.
// It takes an accumulator and the current value as arguments and returns a single value.
const nums = [1, 2, 3, 4];
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);

// PUSH()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
const animals = ['dog', 'cat', 'rabbit'];
animals.push('hamster');

// POP()
// The pop() method removes the last element from an array and returns that element.
const colors = ['red', 'green', 'blue'];
const lastColor = colors.pop();

// EVERY()
// The every() method checks if all elements of an array pass a test implemented by the provided function.
// It returns a boolean value.
const nums2 = [2, 4, 6, 8, 10];
const allEven = nums2.every((num) => num % 2 === 0);

// FILL()
// The fill() method fills all the elements of an array with a static value from a start index to an end index.
// It modifies the original array and returns the modified array.
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // [1, 0, 0, 4]