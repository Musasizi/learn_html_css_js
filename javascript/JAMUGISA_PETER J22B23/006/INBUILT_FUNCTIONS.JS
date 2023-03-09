fruits=['apple','mango','orange']
cgpas=[3.4,4.5,5.6,7.8,'man']
//map() - creates a new array with the results of calling a provided function on every element in the calling array
const numbers = [1,2,3];
const doubles=numbers.map((num)=>num*2);
console.log(doubles);
//filter() - creates a new array with all elements that pass the test implemented by the provided function
filtered_fruits=fruits.filter((word)=> word.length>3);
console.log(filtered_fruits);
// reduce() - applies a function to each element in the array to reduce the array to a single value

// push() - adds one or more elements to the end of an array and returns the new length of the new array
fruits.push('pineapple')
console.log(fruits);
// pop() - removes the last element from an array and returns that element
fruits.pop()
console.log(fruits);

// every() - tests whether all elements in the array pass the test implemented by the provided function and returns a boolean value
mine=fruits.every((fruits)=> fruits.length >5)

// fill() - fills all the elements of an array from a start index to an end index with a static value
fruits.fill()
console.log(fruits);