// the do while loop
// it will run at least once even if the condition is false because it runs the code first and then checks the condition

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

// the while loop
// it will run as long as the condition is true and will stop when the condition is false

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// the for in loop
// it will loop through the properties of an object and return the names of the properties as strings

var person = {fname:"John", lname:"Doe", age:25};
var text = "";
var x;
for (x in person) {
    text += person[x];
}

// the for of loop
// it will loop through the values of an iterable object and return the values

var cars = ["Saab", "Volvo", "BMW"];
var x;
for (x of cars) {
    console.log(x);
}
