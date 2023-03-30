
// Infinite do...while loop
let Personnel ="admin";
do{
    console.log("Access Granted");
}
while(Personnel == "admin");

// while loop
let numberVector = 45;
while (numberVector > 10){
        console.log("That is your current age!");
}

//For Loop
mealsPlan = ["me","je", "ker"];

let mbelengeSnack =() =>{
    for (i in mealsPlan){
        console.log(mealsPlan[i])
    }
}

mbelengeSnack();

//For in loop
//Key pairs
let personalityPerson = {name:"Conrad", age:35};
let join = " ";
for(let j in personalityPerson){
    join += personalityPerson + " ";
}

//for of
//Looping over a String

let nameLoop = "Conrad";

let togetheR ="";
for(let j of nameLoop){
    togetheR += j;
}


//map()
//let add all numbers in the array 

let integerA = [45,34,24,6,5];
let funcArr = integerA.map(additionNumber);

function additionNumber(num){
    return num + 20;
}
console.log(funcArr);

//filter()
//Finding sth specific
let ages = [23,64,6,32]

function checkAge(age){
    return age >= 18;
}

let result = ages.filter(checkAge);
console.log(result);

//reduce()
let agesA = [23,64,6,32]
function checkAge_Reduce(age){
    return age >= 18;
}
let reducT = ages.filter(checkAge_Reduce);
console.log(reducT);

//push()
// add elements to the new array

let animals = ["Monkey", "Baboon"];
animals.push("Ape");
console.log(animals);

//pop()
//remove last element

let animalsZoo = ["Monkey", "Baboon"];
animalsZoo.pop("Ape");
console.log(animalsZoo);

//every
//returns true or false

let ratio = [14,42,64,7,53,];
let checkRatio = ratio.every(checkeR);

function checkeR(rate){
    return rate > 25;
}

console.log(checkRatio);

//fill
let images = ["kid","chick"];
images.fill("duck");

console.log("images");