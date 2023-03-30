const arr1 = [1, 3, 3, 5, 6, 4];
arr1.push(10);
// console.log(arr1);
arr1.pop();
// console.log(arr1);

const arr2 = [1, 3, 3, "BOY", 6.5, "LADY", false];

const listOfHostels = () => {
  return ["Tupendane", "Cronos", "Sky Courts", "Davids Ark", "PDR"];
};

// Hostel array
const hostels = listOfHostels();

// My object
const myObject = {
  name: "Zaza",
  age: 21,
  gender: "male",
  courseUnits: [
    "Web programing",
    "Database programing",
    "Linear Algebra",
    "Computational complexity",
  ],
};

// Using a do...while loop
const doWhileLoop = (arr) => {
  let i = 0;

  do {
    console.log(arr[i]);
    i++;
  } while (hostels[i] !== "Cronos");
};

// doWhileLoop(hostels);

// Using a whileLoop
const whileLoop = (arr) => {
  let j = 0;

  while (j < arr.length) {
    console.log(`learning looptydoops: ${arr[j]}`);
    j++;
  }
};

// whileLoop(arr1);

// Using the for..in syntanx and the for...of syntax.
const forinLoopAndForOf = (obj) => {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      console.log(`${key}:`);

      for (let course of obj[key]) {
        console.log(`- ${course}`);
      }
    } else {
      console.log(`${key}: ${myObject[key]}`);
    }
  }
};

// forinLoopAndForOf(myObject);

// Using the filter method
const usingFilter = (arr) => {
  const result = arr.filter((value) => value.length < 8);
  return result;
};

// console.log(usingFilter(hostels));

// Using the Map method
const usingMap = (arr) => {
  const result = arr.map((val) => val + " mapped over");
  return result;
};

// console.log(usingMap(hostels));

// Using the reduce method
const usingReduce = (arr, initialValue) => {
  const result = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return result;
};

// console.log(usingReduce(arr1, 2));

// Using the Every method
const allPositiveNumbers = (arr) => {
  return arr.every((num) => {
    return num > 0;
  });
};

// console.log(allPositiveNumbers(arr1));

// Using the Fill function
const usingFill = (arr, value, start, end = arr.length) => {
  const result = arr.fill(value, start, end);

  return result;
};

// console.log(usingFill(arr1, 4, 1, 4));
