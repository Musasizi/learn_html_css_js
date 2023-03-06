// NUMBER ONE: Loops

// do-while loop
let counter = 0; // using camelCase for variable name
do {
console.log(counter); // logs the value of counter to the console
counter++; // increments the value of counter by 1
} while (counter < 5); // repeats the loop until the value of counter is less than 5

// while loop
let i = 0; // using camelCase for variable name
while (i < 5) { // checks if the value of i is less than 5
console.log(i); // logs the value of i to the console
i++; // increments the value of i by 1
}

// for-in loop
const person = { // using camelCase for object and property names
name: 'John',
age: 30,
city: 'New York'
};
for (const key in person) { // using camelCase for variable name
console.log($,{key}, $,person,[key]); // logs the key-value pairs of the person object to the console
}

// for-of loop
const fruits = ['apple', 'banana', 'orange']; // using camelCase for array name
for (const fruit of fruits) { // using camelCase for variable name
console.log(fruit); // logs the value of each fruit in the fruits array to the console
}

// NUMBER TWO: Built-in functions

// map() - creates a new array by applying a callback function to each element of an existing array
const numbers = [1, 2, 3, 4, 5]; // using camelCase for array name
const doubledNumbers = numbers.map(function(num) { // using camelCase for variable and function name
return num * 2;
});
console.log(doubledNumbers); // logs [2, 4, 6, 8, 10] to the console

// filter() - creates a new array with all elements that pass the test implemented by the provided function
const scores = [80, 90, 60, 70, 50]; // using camelCase for array name
const passingScores = scores.filter(function(score) { // using camelCase for variable and function name
return score >= 70;
});
console.log(passingScores); // logs [80, 90, 70] to the console

// reduce() - applies a function to each element of an array to reduce it to a single value
const nums = [1, 2, 3, 4, 5]; // using camelCase for array name
const sum = nums.reduce(function(acc, num) { // using camelCase for variable and function name
return acc + num;
}, 0);
console.log(sum); // logs 15 to the console

// push() - adds one or more elements to the end of an array
const animals = ['dog', 'cat']; // using camelCase for array name
animals.push('bird'); // adds 'bird' to the end of the animals array
console.log(animals); // logs ['dog', 'cat', 'bird'] to the console

// pop() - removes the last element from an array
const colors = ['red', 'green', 'blue']; // using camelCase for array name
const lastColor = colors.pop(); // removes 'blue' from the end of the colors array and assigns it to lastColor
console.log(lastColor); // logs 'blue' to the console
console.log(colors); // logs ['red', 'green'] to the console

// every() - checks if all elements of an array pass a test implemented by the provided
every()
//The every() method tests whether all elements in an array pass the test implemented by the provided function. It returns a boolean value.
fill()
// The fill() method fills all the elements of an array from a start index to an end index with a static value. It changes the original array.