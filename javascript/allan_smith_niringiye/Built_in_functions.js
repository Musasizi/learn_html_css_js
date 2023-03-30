
// 1. map()

//The map() function is used to create a new array by applying a function to each element of an existing array.
//Forexample:

const numbersMap = [1, 2, 3, 4, 5];
const doubledNumbers = numbersMap.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 2. filter()

//The filter() function is used to create a new array that includes only the elements of the original array that pass a provided test.
//Forexample:

const numbersFilter = [1, 2, 3, 4, 5];
const evenNumbers = numbersFilter.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// 3. reduce()

//The reduce() function is used to reduce an array to a single value by repeatedly applying a provided function to each element of the array. 
//Here's an example:

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// 4. push()

//The push() function is used to add one or more elements to the end of an array.
//Here's an example:

const numbersPush = [1, 2, 3, 4, 5];
numbersPush.push(6);
console.log(numbersPush); // Output: [1, 2, 3, 4, 5, 6]
// 5. pop()

//The pop() function is used to remove the last element from an array. 
//Here's an example:

const numbersPop = [1, 2, 3, 4, 5];
const lastNumber = numbersPop.pop();
console.log(lastNumber); // Output: 5
console.log(numbersPop); // Output: [1, 2, 3, 4]

// 6. every()

//The every() function is used to test whether all elements in an array pass a provided test. 
//Here's an example:

const numbersEvery = [2, 4, 6, 8, 10];
const allEven = numbersEvery.every(num => num % 2 === 0);
console.log(allEven); // Output: true

// 7. fill()

//The fill() function is used to fill all the elements of an array with a static value. 
//Here's an example:
const numbersFill = [1, 2, 3, 4, 5];
numbersFill.fill(0);
console.log(numbersFill); // Output: [0, 0, 0, 0, 0]

