// do while loop
let sum = 0
let j = 1

do {
    sum += j
    console.log(sum);
    j++
} while (j <= 100);

//while loop
let newSum = 0
let i = 1

while (i <= 100) {
    newSum += i
    i++
    console.log(newSum);
}

//for in loop
const Student = {
    'name': 'Soul',
    'accessNumber': 'A96920',
    'year': 2,
    'semester': 2
}

for (const key in Student) {
    console.log(`${key}: ${Student[key]}`);
}

//for of loop
const hostels = ["Tupendane", "Cronos", "Sky Courts", "Davids Ark"]

for (const hostel of hostels) {
    console.log(hostel);
}

//Array methods
// Array.map()
var arr = [2, 5, 6, 3, 8, 9];

var newArr = arr.map(function (val, index) {
    return { number: val, square: val * val };
})

console.log(newArr)

// filter()
const words = ['spray', 'limit', 'elite', 'Documents', 'Javascript', 'Assignment'];

const result = words.filter(word => word.length > 6);

console.log(result);

// reduce()
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value

// push()
var array2 = [1,2,3,4,5,6,7,8,9]
array2.push(10)
console.log(array2);
// the push method appends a new value to the end of a given array

// pop()
var array3 = [1,2,3,4,5,6,7,8,9]
array3.pop()
console.log(array3);
// the pop method removes the last element of an array

// every()
const isSmall = (value) => value < 40;
const array4 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isSmall));
// the every function calls a given callback function for each element in an array

// fill()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
console.log(fruits);
// it fills a given array with a provided value