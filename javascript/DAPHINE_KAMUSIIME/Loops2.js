//FOR IN LOOP
// -- loops through properties of an object

const myObject = {
    name: 'Daphine',
    course:'BSCS',
    isResident:'NO',
    current_year:2
  };
  
  for (let key in myObject) {
    console.log(key + ': ' + myObject[key]);
  }

//the loop iterates over each property of the object and prints out the name of the property with the corresponding values


//FOR OF LOOP
// -- iteratesd through the items in a collection or sequence
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item of array) {
    console.log(item);
}
//prints each item in turn


//WHILE LOOP
// -- allows code to be executed repeatedly based on a given boolean condition

let i = 1;
while (i <= 10) {
    console.log("Happy Weekend!!!!!");
    i++;
}





