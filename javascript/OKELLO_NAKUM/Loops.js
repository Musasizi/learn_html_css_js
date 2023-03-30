//NUMBER ONE:

//1. do-while loop:
// The do-while loop executes a block of code at least once, and then it continues to execute the block of code as long as the condition specified in the while statement remains true.

let i = 0;
do {
console.log("The value of i is " + i);
i++;
} while (i < 5);

//2. while loop:
// The while loop executes a block of code as long as the condition specified in the while statement remains true.

let j = 0;
while (j < 5) {
console.log("The value of j is " + j);
j++;
}

//3. for in loop:
// The for...in loop iterates over the properties of an object. In each iteration, one of the object's properties is assigned to the loop variable.

const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
console.log(obj.$,{prop} = $,{obj:[prop]});
}

//4. for of loop:
// The for...of loop iterates over the values of an iterable object such as an array or a string.

const arr = ['a', 'b', 'c'];

for (const elem of arr) {
console.log(elem);
}



//NUMBER TWO:

//1. map()
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//2. filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const longWords = words.filter((word) => word.length > 6);
console.log(longWords); // Output: ["exuberant", "destruction", "present"]

//3. reduce()
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

const number = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum); // Output: 15

//4. push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

const fruit = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ["apple", "banana", "orange"]

//5. pop()
// The pop() method removes the last element from an array and returns that element.

const fruits = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: "orange"

//6. every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const Numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // Output: true

//7. fill()
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
