// Do-While loop - will execute the code inside the loop at least once and will continue until the condition becomes false
let i = 0;
do {
console.log('do while,This is ' ,i);
i++;
} while (i < 5);

// While loop - will continue to execute the code inside the loop as long as the condition is true
let j = 0;
while (j < 5) {
console.log('While Loop,this is ' ,j);
j++;
}

// For-In loop - used to loop through the properties of an object
const car = {make: 'Toyota', model: 'Camry', year: 2022};
for (const key in car) {
console.log(key , car);
}

// For-Of loop - used to loop through the elements of an iterable object such as an array or string
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
console.log(fruit);
}

