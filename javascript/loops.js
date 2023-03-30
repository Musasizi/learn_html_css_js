

const arr1 = [1, 3, 3, 5, 6, 4];

const arr2 = [1, 3, 3, "BOY", 6.5, "LADY", false];

// console.log(hostels[3])
// console.log(hostels.length)
// hostels.push("Nsibambi")
// hostels.push("Sabiti")
// console.log(hostels)

const listOfHostels = () => {
    return ["Tupendane",
        "Cronos", "Sky Courts",
        "Davids Ark"]
}
function mentionHostels() {
    for (let i = 0; i < listOfHostels().length; i++) {
        console.log(`Number ${i + 1} ${listOfHostels()[i]}`)
    }
}

mentionHostels()


/*
    do - while loop
    while loops
    for in
    for of

    map()
    filter()
    reduce()
    push()
    pop()
    every()
    fill()

 */

// do - while loop
var isSunny = true;
var i = 1;

do{
    console.log("I am washing my clothes.");
    i++;
}
while (isSunny, i < 10);


//while loop
var x = 5;

while(x <= 10){
    console.log("The number is ",x,"\n");
    x++;
}


// for in
var zoo = ["Lion", "Giraffe", "Zebra", "Antelope", "Elephant"];
var x;

for (x in zoo) {
    console.log(zoo[x]," in the zoo.");   
}

// for of
var zoo = ["Lion", "Giraffe", "Zebra", "Antelope", "Elephant"];
var x;

for (x of zoo) {
    console.log(x," of the zoo.");   
}

//map()
const num = [6.5, 2.7, 1.2, 3.4];
var newArr = num.map(Math.round);

console.log(newArr);

//filter()
let lst =[12, 17, 24, 50, 44];
const result = lst.filter(Age);

function Age(lst) {
    return Age >= 18;
}

//reduce()
const num2 = [15, 2, 11, 3, 5, 4];
const x = num2.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}

//push()
var zoo = ["Lion", "Giraffe", "Zebra", "Antelope", "Elephant"];
zoo.push("Gazelle", "Hippo");

console.log("The new zoo list is ", zoo);

//pop()
zoo.pop()
console.log("Popped zoo is ",zoo);

//every()
const lat = [15, 8, 11, 3, 5, 4, 9];

lat.every(check)

function check(lat){
    return lat > 8;
}

//fill()
var fruits =["apple", 'orange', 'lemon', 'grape'];

fruits.fill("kiwi", 2, 5);
console.log("New fruit list is ",fruits);


//     console.log("The natural number is ", number)
// }

// let sum = 0;
// const MAX_NUM = 100;
// for (let number = 1; number <= MAX_NUM; number++) {
//     sum += number;
// }

// console.log(sum)

