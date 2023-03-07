// do-while loop: A do-while loop is similar to a while loop, except that it will always execute the code inside the loop at least once, even if the condition is initially false. The syntax is as follows:
// do {
//   // code to execute
// } while (condition);

let counter = 0;
do {
  console.log(counter); // logs 0, 1, 2, 3, 4 to the console
  counter++;
} while (counter < 5);

// while loop: A while loop is used to execute a block of code repeatedly while a specified condition is true. The syntax is as follows:
// while (condition) {
//   // code to execute
// }

let index = 0;
while (index < 5) {
  console.log(index); // logs 0, 1, 2, 3, 4 to the console
  index++;
}

// for-in loop: A for-in loop is used to iterate over the properties of an object. The syntax is as follows:
// for (let key in object) {
//   // code to execute for each key-value pair
// }

const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`); // logs "a: 1", "b: 2", "c: 3" to the console
}

// for-of loop: A for-of loop is used to iterate over the elements of an iterable object (like an array). The syntax is as follows:
// for (let element of iterable) {
//   // code to execute for each element
// }

const nums = [1, 2, 3];
for (let num of nums) {
  console.log(num); // logs 1, 2, 3 to the console
}

/**
 * Naming conventions:
 * snake_case - used to write strings.
 * camelCase - used to write Variable and Function names (when naming objects, functions and instances).
 * MACRO_CASE - used for constants
 * CapCase - used for naming classes
 */

// Function named with a verb
function printNums(array) {
  for (let num of array) {
    console.log(num);
  }
}

printNums(nums); // logs 1, 2, 3 to the console
