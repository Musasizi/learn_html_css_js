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
7. fill()

*/


/* 
.....................SOLUTIONS TO NUMBER ONE:.....................................
.......................1. do-while loop:.............................................
The synytax of do...while loop is:

    do {
        // body of loop
    } while(condition)
*/


/*
1.The body of the loop is executed at first. Then the condition is evaluated.
2.If the condition evaluates to true, the body of the loop inside the do statement is executed again.
3.The condition is evaluated once again.
4.If the condition evaluates to true, the body of the loop inside the do statement is executed again.
5.This process continues until the condition evaluates to false. Then the loop stops.

NOTE:: do...while loop is similar to the while loop. The only difference is that in do…while loop, the body of loop is executed at least once.

Example 1: Display NUmbers from 1 to 5
*/

// program to display numbers from 1 to 5
let i = 1;
const n = 5;

// do...while loop from 1 to 5 

do {              
    console.log(i);
    i++;
} while(i <= n);

//Output: prints out 1 to 10 vertically

/*
This is how the above program works or runs.

Iteration		    Variable      Condition: i <= n      Action
	                 i = 1         not checked           1 is printed. i is increased to 2.
					 n = 5
			
1st                  i = 2          true                 2 is printed. i is increased to 3.
                     n = 5

2nd                 i = 3           true                 3 is printed. i is increased to 4.
                    n = 5

3rd                 i = 4           true                 4 is printed. i is increased to 5.
					n = 5

4th                 i = 5           true                 5 is printed. i is increased to 6.
                    n = 5  

5th                 i = 6           false                The loop is terminated
                    n = 5
				
*/


/*
Example 2: 
to find the sum of positive numbers
if the user enters negative number, the loop terminates
negative number is not added to sum 
*/

/*
let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)

console.log(`The sum is ${sum}.`);
*/

/*
Output: 
When the user enters a negative, the sum is 0 and the progam terminates and when the user enters different numbers and finally enters a negative, 
the program will terminate and the summation of all the entered numbers is displayed but the negative number is not added.
A) WHEN A NEGATIVE NUMBER IS ENTERED:
    Enter a number: -7
    The sum is 0.

The body of the do...while loop runs only once if the user enters a negative number.

B) WHEN POSITIVE NUMBERS ARE ENTERED AND THEN A NEGATIVE IS ENTERED:
    Enter a number: 3
    Enter a number: 4
    Enter a number: 6
    Enter a number: 8
    Enter a number: 9
    Enter a number: -2
    The sum is 30.

The do...while loop continues until the user enters a negative number. When the number is negative, the loop terminates; the negative number is not added to the sum variable.


*/




//........................2. while loop..................................

/* The syntax of the while loop is:

while (condition) {
    // body of loop
}
*/


/*
1.A while loop evaluates the condition inside the parenthesis ().
2.If the condition evaluates to true, the code inside the while loop is executed.
3.The condition is evaluated again.
4.This process continues until the condition is false.
5.When the condition evaluates to false, the loop stops.

*/

/*
Example 1: Dispay Numbers from 1 to 9
*/

// program to display numbers from 1 to 9
// initialize the variable
let m = 1, p = 9;

// while loop from i = 1 to 9
while (m <= p) {
    console.log(i);
    m += 1;
}

//output: Prints out numbers from 1 to 9.

/*
This is how this program works:

Iteration           Variable        Condition: i <= n       Action
1st				    i = 1           true                    1 is printed. i is increased to 2.
					n = 5

2nd                 i = 2           true                    2 is printed. i is increased to 3.
					n = 5

3rd                 i = 3           true                    3 is printed. i is increased to 4.
                    n = 5

4th		            i = 4           true                    4 is printed. i is increased to 5.
                    n = 5

5th                 i = 5           true                    5 is printed. i is increased to 6.
                    n = 5

6th                 i = 6           false                   The loop is terminated
                    n = 5
*/

//Example 2: To get the Sum of Positive Numbers Only

/*
program to find the sum of positive numbers
if the user enters a negative numbers, the loop ends
the negative number entered is not added to sum
*/
// let sum_mation = 0;

// // take input from the user
// let number_entered = parseInt(prompt('Enter a number: '));

// while(number_entered >= 0) {

//     // add all positive numbers
//     sum_mation += number_entered;

//     // take input again if the number is positive
//     number_entered = parseInt(prompt('Enter a number: '));
// }

// // display the sum
// console.log(`The sum is ${sum_mation}.`);

/*
    Enter a number: 2
    Enter a number: 8
    Enter a number: 9
    Enter a number: 5
    Enter a number: -6
    The sum is 24.

In the above program, the user is prompted to enter a number.

parseInt() is used because prompt() takes input from the user as a string. 
And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.

The while loop continues until the user enters a negative number. During each iteration, the number entered by the user is added to the sum variable.

When the user enters a negative number, the loop terminates. Finally, the total sum is displayed.
*/




//....................... 3. for..in loop ....................................

/* The syntax of the for...in loop is:
for (key in object) {
    // body of for...in
}
*/

// In each iteration of the loop, a key is assigned to the key variable. The loop continues for all object properties.

//Example 1: Iterating through an object

const student = {
    name: 'Moga Muzamil',
    year: 2,
    semester: 2
   
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}

/*
Output: 
    name => Moga Muzamil
    year => 2
    semester => 2
    


In the above program, the for...in loop is used to iterate over the student object and print all its properties.
NOTE: The object key is assigned to the variable key.
    student[key] is used to access the value of key.
*/

 
//Example 2: TO UPDATE VALUES OF PROPERTIES 
const salaries= {
    Moga : 25000,
    Isaac : 45000,
    Joan : 65000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

/*
OUTPUT: 
    Moga : $25000,
    Isaac : $45000,
    Joan : $65000

In the above example, the for...in loop is used to iterate over the properties of the salaries object. 
Then, the string $ is added to each value of the object.

 */


// for...in loop with Strings
//You can also use for...in loop to iterate over string values. For example,

const term = 'semester';

//using for...in loop
for (let i in term) {
    console.log(term[i]);
}

/*
OUTPUT: 
    s
    e
    m
    e
    s
    t
    e
    r
*/

// //for..in with Arrays
// //You can also use for...in with arrays. For example,

// // define array
// const arr = [ 'hey', 10, 'JavaScript' ];

// // using for...in loop
// for (let x in arr) {
//     console.log(arr[x]);
// }

// /*
// OUTPUT:
//     hey
//     10
//     JavaScript

// */
// /*
//     NOTE:
//    You should not use for...in to iterate over an array where the index order is important. 
//    One of the better ways to iterate over an array is using the for...of loop.
// */


//......................... 4. for...of loop ........................................................................................
/* The syntax of the for...of loop is:

for (element of iterable) {
    // body of for...of
}
*/


/*
In for...of loop
iterable - an iterable object (array, set, strings, etc).
element - items in the iterable
*/

//for...of loop with Arrays
//The for..of loop can be used to iterate over an array. For example,


// array
const students = ['Conrad', 'Soul', 'Jamugisha'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}

/*
OUTPUTS: 
    Conrad
    Soul
    Jamugisha

In the above program, the for...of loop is used to iterate over the students array object and display all its values.
*/

//for..of loop with Strings 
//You can use for...of loop to iterate over string values. For example,

// string
const string = 'name'; 

// using for...of loop
for (let i of string) {
    console.log(i);
}

/*
OUTPUT:
    n
    a
    m
    e
*/


//for..of with Sets
//You can iterate through Set elements using the for...of loop. For example,


// define Set
const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
    console.log(i);
}

/*
OUTPUT: 
    1
    2
    3
*/

//for...of loop with Maps 
//You can iterate through Map elements using the for...of loop. For example,

// define Map
let map = new Map();

// inserting elements
map.set('name', 'Moga');
map.set('sex', 'Male');

// looping through Map
for (let [key, value] of map) {
    console.log(key + '- ' + value);
}

/*
OUTPUT:
    name- Moga
    sex- Male
*/


// User Defined Iterators
// You can create an iterator manually and use the for...of loop to iterate through the iterators. For example,

// creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}

/*
OUTPUT: 
    1
    2
    3
*/


//for...of with Generators 
//Since generators are iterables, you can implement an iterator in an easier way. Then you can iterate through the generators using the for...of loop. For example,


// generator function
function* generatorFunc() {
  
    yield 20;
    yield 30;
    yield 40;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
    console.log(value);
}

/*
OUTPUT:
    20
    30
    40  
*/

//..............................................................................................................................................

/*
                                                NUMBER TWO:
Write about the Built-in functions in JavaScript.

Built-in functions in JavaScript are useful. You can use it to construct more complex functions. 
So, knowing these functions is important to improve your knowledge of that programming language.


1. map()
2. filter()
3. reduce()
4. push()
5. pop()
6. every()
7. fill()

*/

//1. map()
/*
The map() function creates a new array resulting from calling a user-supplied callback function. The function visits every element in the calling array. 
You can see the map() method as going through a loop and writing the statement in the callback function to construct a new array.

The uses cases for map() method include;
1.Doubling the elements of an array
2.Reformatting objects in an array
3.Applying callback on certain elements in an array
4.Converting a string to an array
5.Iterating through a NodeList
6.Rendering a List in React Library
*/

/*
......1.Doubling the elements of an array:
You can create a new array from another array using the map() method. 
For example, you can double the elements of an integer array and construct a new array from the initial array.
*/

let initialArray = [1,2,3,4,5]

let doubles = initialArray.map( function(num) {
  return num*2
})

console.log(initialArray); // returns [1,2,3,4,5]
console.log(doubles); // returns [2,4,6,8,10]

/* 
            OR
You can also use the arrow function to do the same operation.

let initialArray = [1,2,3,4,5]
let doubles = initialArray.map(x => x * 2);

console.log(initialArray); // returns [1,2,3,4,5]
console.log(doubles); // returns [2,4,6,8,10]
*/

/*
..............2. Reformatting objects in an array
You can reformat an array of objects using the map() method. 
For example, you have an array of objects that contains the first and last names of the people. 
Also, you want to create a new array containing the people’s full name in the people array.

*/
var lineup = [
    {
      id: 1,
      firstName: "Moga",
      lastName: "Muzamil"
    }, {
      id: 2,
      firstName: "Mutua",
      lastName: "Brian"
    }, {
      id: 3,
      firstName: "Chris",
      lastName: "Mabrizzy"
    }, {
      id: 4,
      firstName: "Edmond",
      lastName: "Lubangakene"
    }, {
      id: 5,
      firstName: "Shamira",
      lastName: "Namagga"
    }
  ];
  

/*
..............3. Applying callback on certain elements in an array
Instead of doubling every element in the array, you can double the specified elements. 
For example, you may want to double the elements if they are odd.
*/

const numArray = [1, 2, 3, 4];
const sqrts = numArray.map( (num) => {
  return num % 2 === 1 ? Math.sqrt(num): num
} );

/*
.............4. Converting a string to an array
You can convert a string to an array using map() method.
To do that, you can get help from the .call() method.
*/

/*const language = "JavaScript"
const map = Array.prototype.map 
const letters = map.call(language, eachLetter => {
    return `${eachLetter}`
})

console.log(letters) //  ['J','a','v','a','S','c','r','i','p','t']
*/

/*
.................5. Iterating through a NodeList
You can use map() method to iterate through the objects collected by querySelectorAll(). 
It is possible since querySelectorAll() returns a NodeList.
*/

/*
let NodeList = document.querySelectorAll(“p”);

let values = Array.prototype.map.call(NodeList, function(obj) {
  return obj.value
})
*/

/*
................6. Rendering a List in React Library
You can also use map() when using the React library. You can render a list in React.

import React from ‘react’;
import ReactDOM from ‘react-dom’;

const numbers = [1,2,3,4,5];
const listItems = numbers.map( (number) =>
<li> {number} </li>
);

ReactDOM.render(
 <ul>{listItems}</ul>,
 document.getElementById('root')
);

*/

//................................ 2. filter()...........................................................................
/*
The JavaScript filter array function is used to filter an array based on specified criteria. After filtering it returns an array with the values that pass the filter.
The JavaScript filter function iterates over the existing values in an array and returns the values that pass. The search criteria in the JavaScript filter function are passed using a callbackfn.
Arrow functions can also be used to make JavaScript filter array code more readable.

Syntax of JavaScript filter():
    array.filter(function(value, index, arr), thisValue)
The "array" refers to the original array that you are looking to filter.

Parameters:

    1. function - Required. A function or search criteria that would be used to filter values in the array
        value - Required, the current element that needs to be filtered
        index - Optional, in case you would like to start the iteration from a specific index
        arr - The array object being called upon
    2. thisValue - Optional, this value present would be passed in case the parameter is empty


USE: used filters on websites as they help us find things easily, the JavaScript filter array function is what facilitates this.
We use the JavaScript filter array function to return freelancers containing the particular skillset.

Furthermore, the JavaScript filter does not mutate the string but rather creates a new one hence the original string is not affected.
Similarly, websites with filters all make use of the JavaScript filter array function.



// EXAMPLE 1: taking an array containing numerical values and removing negative values using the filter array function.

*/
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive_array = numbers.filter(function(value) {
    return value >= 0; });

console.log(positive_array);

/* Output = [0, 1, 5, 12, 19, 20]


As you can see above, we have defined a function that only returns values >= 0.

Now using the filter array function on an array of objects.
*/
// let Numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// let Positive_array = Numbers.filter(value => value >= 0);

// console.log(Positive_array);

// //Output = [0, 1, 5, 12, 19, 20]


/*
EXAMPLE 2: Using the filter array function to filter freelancers with JavaScript as a skill set.

*/
let freelancers = [{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"JavaScript"}];

let javascript_freelancers = freelancers.filter(function(freelancer) {
    return freelancer.skill == "JavaScript"; });

console.log(javascript_freelancers);

//Output = [{ name: "Harry", skill: "JavaScript" }, { name: "David", skill: "JavaScript" }]



//...................................3. reduce()...............................
/*
The array reduce JavaScript syntax is:

array.reduce(callbackfn(total, curValue, curIndex, array), initialValue)

In the above syntax:

    Callbackfn: This is a required parameter that holds the function that is supposed to be executed on every array element. The callbackfn parameter further accepts four parameters that are:
        Total: It is a required parameter, also called accumulator, that holds the initialValue in the beginning and then the last returned value of the function.
        curValue: This is a required argument that holds the value of the current element being executed.
        curIndex: It is an optional parameter holding the index of the current value.
        Array: This is also an optional parameter that holds the complete array object on which the operation is performed.
    initialValue: This is an optional parameter and holds the initial value passed to the function.

*/

/*
1. Example 1: Summing All the Values
In this example, we will implement array reduce in JavaScript to sum the array elements and log the result to the console.
*/


let num = [5, 9, 12, 24, 67]

let sum = num.reduce(function (accumulator, curValue) {

  return accumulator + curValue

}, 0)

console.log(sum)


//OUTPUT: 117

/*
You can also write the same code with arrow functions.

let num = [5, 9, 12, 24, 67]

let sum = num.reduce((accumulator, curValue) => accumulator + curValue, 0)

console.log(sum)


//OUTPUT: 117

/*Example 2: Summing Values in an Object Array Using Array Reduce JavaScript
To sum values from an object array, we need to pass initialValue to the method. This would force all the elements of the array to pass through the function and give the desired result.
*/

/*let initialValue = 0

let obje = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

let sums = obj.reduce(function (accumulator, curValue) {

    return accumulator + curValue.n

}, initialValue)

console.log(sums)
*/

//OUTPUT: 92

/*
Example 3: Flattening an Array of Arrays With Reduce Method
This time we will take an array of arrays and reduce (flatten) it to a single array. The code below demonstrates the same.

*/
let mulArray = [[3, 5], [1, 7], [12, 9]]

let newArray = mulArray.reduce(function(accumulator, curValue) {

    return accumulator.concat(curValue)

  },[]

)

// console.log(newArray)

/*
Example 4: Counting Instances in an Object Using Array Reduce in JavaScript
Here, we will create an array with car names and use the array reduce in JavaScript to count the number of instances when a car name has occurred.

*/
let myCars = ['Mercedes-Benz', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes-Benz', 'BMW', 'Ferrari']

let instances = myCars.reduce(function (allCars, car) {

  if (car in allCars) {

    allCars[car]++

  }

  else {

    allCars[car] = 1

  }

  return allCars

}, {})

console.log(instances)

/*
Example 5: Grouping Objects With Array Reduce in JavaScript
This example groups objects based on a property value using the JavaScript array reduce method.
*/

/*
let student = [

    { name: 'David', age: 23, hobby: 'fishing' },
  
    { name: 'Rachel', age: 25, hobby: 'cooking' },
  
    { name: 'Rahul', age: 22, hobby: 'fishing' }
  
  ];
  
  function myFunc(obj, prop) {
  
    return obj.reduce(function (acc, item) {
  
      let key = item[prop]
  
      if (!acc[key]) {
  
        acc[key] = []
  
      }
  
      acc[key].push(item)
  
      return acc
  
    }, {})
  
  }
  
  let groupedStudent = myFunc(student, 'hobby')
  
  console.log(groupedStudent)
  

  /*Example 6: Removing Duplicates With Array Reduce
  For this example, we will create an array with multiple recurring values and then use the array reduce in JavaScript to eliminate those repeating values.
  */


let array = [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 4, 15]

let new_Array = array.reduce(function (accumulator, curValue) {

  if (accumulator.indexOf(curValue) === -1) {

    accumulator.push(curValue)

  }

  return accumulator

}, [])

console.log(new_Array)


//................................4. push() ..........................................
/*
push() method is used to add one or more elements to the end of an array.
The Array.prototype.push() method adds one or more elements to the end of an array and returns the new array’s length.

The following shows the syntax of the push() method:

push(newElement);
push(newElement1,newElement2);
push(newElement1,newElement2,...,newElementN);

The push() method returns the new value of the length property of the array object on which you call the method.

JavaScript Array push() method examples(examples of using push() method).

*/

/*
1) Using the array push() to append one element to an array:
This example adds the number 40 to the end of the numbers array:
*/

/*
let number = [10, 20, 30];

const length = number.push(40);

console.log(length);
console.log(number);
*/

/*
OUTPUT:
    4
    [ 10, 20, 30, 40 ]
*/

/*
2. Using the array push() to add multiple elements to the end of an array
This example shows how to use the push() method to add multiple elements to the end of an array:
*/


let number = [10, 20, 30];

const length = number.push(40, 50);

console.log(length);
console.log(number);


/*
OUTPUT:
    5
    [ 10, 20, 30, 40, 50 ]
*/

/*
3) Using the push() to append elements of an array to another array
Suppose you have two arrays colors and cmyk:
*/

/*
let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];
*/

/*
And you want to append the elements of the cmyk to the colors array.
To do that, you may use a for...of loop that iterates over the elements of the cmyk array and use the push() method to append each element to the colors array like this:
*/


let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

for (const color of cmyk) {
  colors.push(color);
}

console.log(colors);


//OUTPUT: ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'back']

/*
you can use the spread operator (...) to spread the elements of the cmyk array and push them to the colors array at the same time like this:

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

colors.push(...cmyk);

console.log(colors);
*/

/*
4) Using JavaScript Array push() method with array-like objects

The Array.prototype.push() method is designed to be generic on purpose. Therefore, you can call the push() method with the call() or apply() on the array-like objects.

Under the hood, the push() method uses the length property to determine the position for inserting the elements. 
If the push() method cannot convert the length property into a number, it’ll use 0 as the value for the index.
*/
  
let greetings = {
  0: 'Hi',
  1: 'Hello',
  length: 2,
  append(message) {
    [].push.call(this, message);
  },
};
greetings.append('Howdy');
greetings.append('Bonjour');

console.log(greetings);

/*
OUTPUT:
{
  '0': 'Hi',
  '1': 'Hello',
  '2': 'Howdy',
  '3': 'Bonjour',
  length: 4,
  add: [Function: add]
}

*/

//............................5. pop() ........................................
/*
pop() method used to remove the last element from an array.
Introduction to the JavaScript Array pop() method
The Array.prototype.pop() method removes the last element from an array and returns the removed element. Here’s the syntax of the pop() method:

        array.pop()

The pop() method changes the length property of the array. If the array is empty, the pop() returns undefined.

JavaScript pop() method example
*/

/*
Example 1: Using the JavaScript array pop() method to remove the last element of an array
This  example uses the pop() method to remove the last element of the numbers array:
*/


const numbeer = [10, 20, 30];
const last = numbeer.pop();

console.log(last); // 30
console.log(numbeer.length); // 2


/*
OUTPUT:
    30
    2
*/

/*Using the JavaScript array pop() method with an empty array*/
/*
This example calls the pop() method on an empty array. In this case, the pop() method returns undefined and the length is of the array is zero:
*/


const numbeers = [];
const lasst = numbeers.pop();

console.log(lasst);
console.log(numbeers.length);


/*
undefined
0
*/

/*
2) Using JavaScript pop() method with array-like objects

The pop() method is generic. Therefore, you can use the call() or apply() to call the pop() method on the array-like object. 
Internally, the pop() uses the length property of the array-like object to determine the last element to remove.

*/

let greetinggs = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 2,
    removeLast() {
      return [].pop.call(this);
    },
  };
  
  let greting = greetinggs.removeLast();
  
  console.log(greting);
  console.log(greetinggs);


/*
OUTPUT:
'Howdy'

{
  '0': 'Hi',
  '1': 'Hello',
  length: 2,
  removeLast: [Function: removeLast]
}
*/

//......................................6. every() ................................................
/*
The every() array method in JavaScript is used to check if all the elements of the array satisfy the callback function condition or not.
Example 1: Usoing every() array method to  check if every surveyor answered a question during their test
*/

const surveyors = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
  ];
  
  
let boolVal=surveyors.every(surveyor=>surveyor.answer==="Yes")
console.log(boolVal)

/*
OUTPUT: false

Explaining the code (How the every() array method works.): 
1.We have an array of surveyors with an Object that has the name key and answer key.
2.We want to check if all of the surveyors answered a question.
3.We create a call back that loops through all the elements in the surveyors object and check if each surveyor answer’s surveyor.answer value pair equals "Yes".
4.If all the objects in the array satisfy the criteria, then surveyor.every() will return true. Otherwise, it will return false.
*/

//..........................................7. fill() ....................................
/*
The fill() method, fills the elements of an array with a static value from the specified start position to the specified end position. 
If no start or end positions are specified, the whole array is filled.

Syntax

array.fill(value, start, end)


One thing to keep in mind is that this method modifies the original/given array.
Also using this method on objects instead of cloning/creating multiple objects, all objects refer to the same instance.
We shall look at other methods to overcome this problem.

*/

//Example 
var arry = ["JavaScript", "Fill", "this", "Array"];
arry.fill("Filled", 1, 3);

console.log(arry);
//Output: [‘JavaScript’, ‘Filled’, ‘Filled’, 'Array’]