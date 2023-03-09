/**do-while loop:
A do-while loop is a control flow statement that executes 
a block of code at least once 
and then repeatedly executes the block of code until a specified condition is true
*/

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// prints the numbers from 0 to 4 to the console.

/**
while loop:
A while loop is a control flow statement that repeatedly executes a block of code
 as long as a specified condition is true.
*/

let j = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// prints the numbers from 0 to 4 to the console.


/**
 * for-in loop:
A for-in loop is used to iterate over the properties of an object.
 */


const student = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  for (const property in student) {
    console.log(`${property}: ${student[property]}`);
  }
  // prints the properties and values of the student object to the console.
  

  /**
   * for-of loop:
A for-of loop is used to iterate over the values of an iterable object,
 such as an array or a string.

   */

 const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}

//prints the colors 'red', 'green', and 'blue' to the console.